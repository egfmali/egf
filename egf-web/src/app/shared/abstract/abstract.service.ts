import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollectionGroup, DocumentReference, QueryFn} from '@angular/fire/firestore';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, last, map, switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {Page} from '../utility/page';
import {AngularFireAuth} from '@angular/fire/auth';
import WhereFilterOp = firebase.firestore.WhereFilterOp;
import {Helpers} from "../utility";
import {Sort} from "../services/sort";
import {convertSnaps} from "../utility/db-utils";
import {AngularFireStorage} from "@angular/fire/storage";
import {User} from '../../administration/users/model/user';
import {AngularFirestoreCollection} from "@angular/fire/firestore/collection/collection";
import {AbstractEntity} from "./abstract.entity";



@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T extends AbstractEntity<T>> {


  abstract getPath(): string;

  private collectionGroupRef: AngularFirestoreCollectionGroup<T>;
  private collectionRef: AngularFirestoreCollection<T>;
  private baseCollectionRef: AngularFirestoreCollection<T>;

  filterItems(value) {
    return [];
  }

  constructor(
      protected firestore: AngularFirestore,
      protected auth: AngularFireAuth,
      protected firestorage: AngularFireStorage,
      ) {

      this.collectionGroupRef = this.firestore.collectionGroup(
          this.getPath(),ref => ref.orderBy('createdDate', Sort.DESC));

      this.baseCollectionRef = this.firestore.collection<T>(
          this.getPath(),
          ref =>  ref.orderBy('createdDate', Sort.DESC)
      );

      this.collectionRef = this.baseCollectionRef;
  }


  // abstract get ref(): DocumentReference;
  //
  // abstract get collection(): AngularFirestoreCollection;
  //
  // abstract get collectionGroup(): AngularFirestoreCollectionGroup;


  get isLogged() {
    return firebase
        .auth()
        .onAuthStateChanged((user) => {
          return !!user;
        });
  }

  get UID(): string {
    return this.firestore.createId();
  }

  getPresence(uid: string): Observable<User>{
    return this.firestore
        .collection("status")
        .doc(uid)
        .valueChanges()
        .pipe( map(snaps => {
          const items = convertSnaps<User>(snaps);
          return items.length === 1 ? items[0] : undefined;
        }), first());
  }

  deletePresence(uid: string): Promise<void>{
    return this.firestore
        .collection("status")
        .doc(uid)
        .delete();
  }

  setPresence(value: User):Promise<void> {
    const data = {
      uid: value.uid,
      email: value.email,
      name: value.name,
      photoUrl: value.photoUrl
    }

    return this.firestore
        .collection("status")
        .doc(value.uid)
        .set(data, {merge: true})
  }



  findAll(): Observable<T[]> {
    return this.collectionRef
        .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<T>(snaps)),
        // first()
      );
  }

  findAllGroup(): Observable<T[]> {
    return this.collectionGroupRef
        .snapshotChanges()
        .pipe(map(snaps => convertSnaps<T>(snaps)));
  }


  search(value: string,keys: string = 'keys'): Observable<T[]> {
    return this.firestore.collection<T>(
      this.getPath(),
      ref => {
        return ref
            .where(`${keys}`, "array-contains", value)
            .orderBy('createdDate', Sort.DESC);
      }
    ).snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<T>(snaps)),
        // first()
      );
  }
  searchGroup(value: string,keys: string = 'keys'): Observable<T[]> {
    try {
      return this.firestore.collectionGroup<T>(
          this.getPath(),
          ref => {
            return ref
                .where(`${keys}`, "array-contains", value)
                .orderBy('createdDate', Sort.DESC);
          }
      ).snapshotChanges()
          .pipe(
              map(snaps => convertSnaps<T>(snaps)),
              // first()
          );
    }catch (e) {
      console.log(e);
    }
  }

  findByAttributes(attribute: string, value: string ): Observable<T[]> {
   try {
     return this.firestore.collection<T>(
         this.getPath(),
         ref => {
           return ref
               .where(`${attribute}`, '==', value)
               .orderBy('createdDate', Sort.DESC);
         }
     ).snapshotChanges()
         .pipe(
             map(snaps => convertSnaps<T>(snaps)),
             first()
         );
   }catch (e) {
     console.log(e);
   }
  }

  findAllSnapshot(): Observable<T[]> {
   try {
     return this.collectionRef
         .snapshotChanges().pipe(map(snaps => convertSnaps<T>(snaps)),first());
   }catch (e) {
     console.log(e);
   }
  }

  findAllPage(page, size, filter?, direction?): Observable<Page<T>> {
    try {
      if (!direction) {
        direction = Sort.DESC;
      }
      let queryFn = ref => {
        return ref.orderBy('createdDate', direction);
      };

      if (filter) {
        queryFn = ref => this.getFilterRef(ref, filter);
      }
      return this.itemsObs(queryFn)
          .pipe(map(data => Page.of(data, data.length)));
    }catch (e) {
      console.log(e);
    }
  }

  findAllFilteredSortedPage(page, size, filter?, direction?): Observable<Page<T>> {
    try {
      const queryFn = ref => {
        return ref.orderBy('createdDate', direction);
      };
      return this.itemsObs(queryFn)
          .pipe(map(data => Page.of(data.slice(page * size, (page + 1) * size), data.length)));
    }catch (e) {
      console.log(e);
    }
  }

  create(entity: T) : Observable<T>{
    try {
      console.log("create ===>>>", entity)
      console.log("path ===>>>", this.getPath());

      const user = firebase.auth().currentUser;
      entity.createdDate = new Date();
      entity.createdBy = user ? user.uid : 'admin';
      entity.createdByDisplayName = user ? user.displayName : 'admin';
      entity.uid = entity.uid ? entity.uid : this.UID;
      const item = Helpers.sanitizeUndefined(Object.assign({}, entity));
      this.collectionRef.doc(entity.uid).set(item);
      return this.findSnapshot(entity.uid);
    }catch (e) {
      console.log(e)
    }
  }




  delete(uid: string):Promise<void> {
    return this.firestore.collection<T>(this.getPath()).doc(uid).delete();
  }


  findSnapshot(id: string): Observable<T> {
   try {
     return this.firestore
         .collection(this.getPath(),
             ref => ref
                 .where(firebase.firestore.FieldPath.documentId(), '==', id)
         )
         .snapshotChanges()
         .pipe(
             map(snaps => {
               const items = convertSnaps<T>(snaps);
               return items.length === 1 ? items[0] : undefined;
             }),
             first()
         );
   }catch (e) {
     console.log(e);
   }
  }

  find(id: string): Observable<T> {
    try {
      console.log("find by id == ", id)
      return this.firestore.collection<T>(this.getPath(), ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', id))
          .snapshotChanges()
          .pipe(
              map(snaps => {
                const items = convertSnaps<T>(snaps);
                return items.length === 1 ? items[0] : undefined;
              }),
              first()
          );
    }catch (e) {
      console.log(e);
    }
  }

  findAttribute(attribute: string, value: string ): Observable<T> {
   try {
     console.log("find by attribute == ", attribute)
     console.log("find by value == ", value)
     return this.firestore.collection<T>(this.getPath(), ref => ref.where(`${attribute}`, '==', value))
         .snapshotChanges()
         .pipe(
             map(snaps => {
               const items = convertSnaps<T>(snaps);
               return items.length === 1 ? items[0] : undefined;
             }),
             first()
         );
   }catch (e) {
     console.log(e);
   }
  }


  count(ref?: QueryFn): Observable<number> {
    try {
      return this.firestore
          .collection<T>(this.getPath(), ref ? r => ref(r) : ref)
          .valueChanges()
          .pipe(map(docs => docs.length));
    }catch (e) {
      console.log(e)
    }
  }

  async itemsCount(ref?: QueryFn) {
   try {
     const values = await this.items(ref);
     return values ? values.length : 0;
   }catch (e) {
     console.log(e)
   }
  }

  async items(ref?: QueryFn)  {
    try {
      const values = await this.firestore
          .collection(this.getPath(), ref ? r => ref(r) : ref)
          .snapshotChanges()
          .pipe(map(snaps => convertSnaps<T>(snaps)), first())
          .toPromise();
      return values;
    }catch (e) {
      console.log(e)
    }
  }

  itemsObs(ref?: QueryFn): Observable<T[]> {
   try {
     const c = this.firestore.collection<T>(this.getPath(), ref ? r => ref(r) : ref)
         .snapshotChanges()
         .pipe(map(snaps => convertSnaps<T>(snaps)), first());
     c.subscribe(data => {
       console.log("itemsObs == ", data)
     });

     return c;
   }catch (e) {
     console.log(e)
   }
  }

  update(id: string, entity: T): Observable<T> {
    try {
      const user = firebase.auth().currentUser;
      entity.lastModifiedDate = new Date();
      entity.lastModifiedByDisplayName = user ? user.displayName : 'admin';
      entity.lastModifiedBy = user ? user.uid : 'admin';
      const item = Helpers.sanitizeUndefined(Object.assign({}, entity));
      this.collectionRef.doc(entity.uid).update(item);
      return this.find(id);
    }catch (e) {
      console.log(e)
    }
  }

  updatePartial(items: {}, id: string) {
   try {
     const user = firebase.auth().currentUser;
     const lastModifiedByDisplayName = user ? user.displayName : 'admin';
     items = Helpers.sanitizeUndefined(items);
     return this.firestore
         .doc(this.getPath() + '/' + id)
         .update({
               lastModifiedDate: new Date(),
               lastModifiedByDisplayName: lastModifiedByDisplayName,
               lastModifiedBy: user.uid,
               ...items
             }
         );
   }catch (e) {
     console.log(e)
   }
  }

  public getRef(ref: any, items: { key: string, value: any, operator?: WhereFilterOp }[]) {
    for (const item of items) {
      ref = ref.where(item.key, item.operator ? item.operator : '==', item.value);
    }
    return ref;
  }

  public getFilterRef(ref, value) {
    const items = this.filterItems(value);
    return this.getRef(ref, items);
  }

  private getTref() {
    return ref => {
      return ref.orderBy('createdDate', Sort.DESC);
    };
  }


  get user() {
    return this.auth.authState.pipe(first()).toPromise();
  }


  async uploadImages(id: string, files: File[]): Promise<any> {

    const results = [];
    for (let i = 0; i < files.length; i++) {
      const url = await this.uploadImage(id, i, files[i]);
      results.push(url);
    }

    if (results.length !== 0) {
      return await this.collectionRef.doc(id).update({url: results});
    }
  }

  async uploadImage(id: string, num: number, file: File): Promise<string>  {
    try {

      const path = this.getPath() + '/' + id + '/' + num;
      const ref = this.firestorage.ref(path);
      const upload = ref.put(file);
      await upload.snapshotChanges().pipe(last()).toPromise();
      const url = await ref.getDownloadURL().toPromise();
      console.log('uploadImages image ' + num + ' ', url);
      return url;

    } catch (err) {
      console.log('Error upload image ' + num + ' ' + file.name, err);
    }
  }

  parent(): string {
    return null;
  }

  from(ids?:string[], parentsPath?: string[]) {
    if (!Array.isArray(ids)) {
      ids = [ids];
    }
    if (!parentsPath && ids) {
      parentsPath = [this.parent()];
    }
    if (ids && parentsPath && ids.length === parentsPath.length) {
      let collection = null;
      for (let i = 0; i < ids.length; i++) {
        if (i === 0) {
          collection = this.firestore.collection(parentsPath[i]).doc(ids[i]);
        } else {
          collection = collection.collection(parentsPath[i]).doc(ids[i]);
        }
      }

      if (collection != null) {
        this.collectionRef = collection.collection(this.getPath());
      }
    }

    this.collectionRef;
    return this;
  }


}



