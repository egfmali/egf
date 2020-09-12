import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, of} from "rxjs";
// import {Transporteur} from "../../app/model/user";
import {auth} from "firebase";
import {first, map, switchMap} from "rxjs/operators";
import {User} from "../../administration/users/model/user";
import {SessionService} from "./session.service";
import {convertSnaps, Helpers} from "../utility";
import {UserService} from "../../administration/users/service/user.service";
import {ProfilService} from "../../administration/profils/service/profil.service";
import {Profil} from "../../administration/profils/model/profil";
import {Role} from "../../administration/users/model/role";

const defaultValue = null;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    currentUser$: Observable<User>;

    private _user$ = new BehaviorSubject<User>(defaultValue);
    private _profil$ = new BehaviorSubject<Profil>(defaultValue);
    private _roles$: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>(defaultValue);


    constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private sessionService: SessionService,
    private userService: UserService,
  ) {
        // this.currentUser$ = this.currentUser;
        // this.user$ = this.auth.authState.pipe(
        //     switchMap(user => {
        //
        //         if (user) {
        //             // Logged in
        //             return this.firestore.doc<Transporteur>(`users/${user.uid}`).valueChanges();
        //         } else {
        //             // Logged out
        //             return of(null);
        //         }
        //     }));
  }

    get isAuthenticated() {
        const user = firebase.auth().currentUser;
        // if(user && user.uid) this.findUserByUid(user.uid); Pas besoin d'abord
        return !!user;
    }

    get user$() {return this._user$;}

    set user$(observable$) {this._user$ = observable$;}

    get profil$() { return this._profil$;}

    set profil$(observable$) {this._profil$ = observable$;}


    get roles$() {
        return this._roles$;
    }

    set roles$(observable$) {
        this._roles$ = observable$;
    }

    get currentUser(): Observable<User> {
        const user = firebase.auth().currentUser;
        console.log('currentUser ===>>', user);
        if(user && user.uid)
          return this.findUserByUid(user.uid);

    }


    findUserByUid(id: string): Observable<any> {
        console.log("findUserByUid ===>>>", id)
        return this.firestore.collection<User>(User.colName,
            ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', id))
            .snapshotChanges()
            .pipe(map(snaps => {
                    const items = convertSnaps<User>(snaps);
                    const user = items.length === 1 ? items[0] : undefined;

                    if(user!==undefined) {
                        this._user$.next(user);
                        if(user.profil_uid !=null){
                            this.findProfileByUid(user.profil_uid);
                        }
                    }
                    return user;
                }),
                first()
            );
    }

    findProfileByUid(id: string): Observable<any> {
        console.log("findProfileById ===>>>", id)
        return this.firestore.collection<Profil>(Profil.colName,
            ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', id))
            .snapshotChanges()
            .pipe(map(snaps => {
                    const items = convertSnaps<Profil>(snaps);
                    const profil = items.length === 1 ? items[0] : undefined;
                    if(profil!==undefined) {
                        this._profil$.next(profil);
                        if(profil.roles!=null || profil.roles.length>0){
                            this.setRoles(profil.roles);
                        }
                    }
                    return profil;
                }),
                first()
            );
    }


    setRoles(roles: Role[]) {
        this.roles$.next(roles);
    }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            this.sendEmailVerificationMail(res.user)
                .then(
                    (response) => {
                        value.status = true;
                        value.uid = res.user.uid;
                        value.providerId = res.user.providerId;

                        resolve(this.setUserData(value));
                    }
            )
            .catch(
                (error)=> reject(error)
            )

          }, err => reject(err))
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
          .then(res => {
              console.log('doLogin', res)
            // this.setPresence(res.user);
              this.userService.find(res.user.uid)
                  .subscribe(
                  response=>resolve(response)
              );

          }, err => reject(err))
    })
  }

    private oAuthLogin(provider) {
        return this.auth.signInWithPopup(provider);
    }


  doGoogleLogin(value?) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    return new Promise<any>((resolve, reject) => {
      this.oAuthLogin(provider)
          .then(res => {

              console.log('doGoogleLogin', res)
              value.status = true;
              value.uid = res.user.uid;
              value.name = res.user.displayName;
              value.phone = res.user.phoneNumber;
              value.photoUrl = res.user.photoURL;
              value.providerId = res.user.providerId;

              resolve(this.setUserData(value));

          }, err => reject(err))
    });


  }


  doFacebookLogin(value?) {

    const provider = new firebase.auth.FacebookAuthProvider();

    return new Promise<any>((resolve, reject) => {
      this.oAuthLogin(provider)
          .then(res => {
              console.log('doFacebookLogin',res)
              value.status = true;
              value.uid = res.user.uid;
              value.name = res.user.displayName;
              value.phone = res.user.phoneNumber;
              value.photoUrl = res.user.photoURL;
              value.providerId = res.user.providerId;

              resolve(this.setUserData(value));

          }, err => reject(err))
    });

  }

  doTwitterLogin(value?) {
    const provider = new firebase.auth.TwitterAuthProvider();

    return new Promise<any>((resolve, reject) => {

      this.oAuthLogin(provider)
          .then(res => {
              console.log('doTwitterLogin', res)
              value.status = true;
              value.uid = res.user.uid;
              value.name = res.user.displayName;
              value.phone = res.user.phoneNumber;
              value.photoUrl = res.user.photoURL;
              value.providerId = res.user.providerId;

              resolve(this.setUserData(value));

          }, err => reject(err))
    });

  }



  checkPassword(providedPassword, email) {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      email ? email : user.email,
      providedPassword
    );

    return new Promise<any>((resolve, reject) => {
      user.reauthenticateWithCredential(credential)
          .then(res => {
            console.log('checkPassword', res);
            resolve(res);
          }, err => reject(err))
    });

  }



  // Send email verfificaiton when new user sign up
  sendEmailVerificationMail(user: firebase.User){
    return new Promise<any>((resolve, reject) => {
          user.sendEmailVerification()
          .then(res => {
            console.log('sendEmailVerificationMail', res);
            resolve(true);
          }, err => reject(err))
    })
  }

  async sendPasswordResetEmail(value) {
    return new Promise<any>((resolve, reject) => {
      this.auth.sendPasswordResetEmail(value.email)
          .then(res => {
            console.log('sendPasswordResetEmail', res);
            resolve(true);
          }, err => reject(err))
    });

  }

  private setUserData(entity) {

      entity.createdDate = new Date();
      entity.createdBy = 'admin';
      entity.createdByDisplayName =  'admin';
      const item = Helpers.sanitizeUndefined(Object.assign({}, entity));

    const userRef = this.firestore
        .collection(User.colName)
        .doc(entity.uid);

    return new Promise<any>((resolve, reject) => {
      userRef.set(item)
          .then(res => {
            console.log('updateUserData', res);
            userRef.get().subscribe(
              respnse => resolve(respnse),
              error =>  reject(error),
            );
          }, err => reject(err))
    });

  }

  async signOut() {
    await this.auth.signOut();
    this.sessionService.clear();
    this.router.navigate(['/auth/login']);
  }
}
