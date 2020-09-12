import {Injectable} from '@angular/core';
import {first, map, mergeMap} from 'rxjs/operators';
import {AngularFirestoreCollection, QueryFn} from '@angular/fire/firestore';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import * as firebase from 'firebase';
import {User} from "../model/user";
import {AbstractService} from "../../../shared/abstract/abstract.service";
import {Role} from "../model/role";
import {convertSnaps, RoleHelpers} from "../../../shared/utility";
import {Profil} from "../../profils/model/profil";


const defaultValue = null;

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService<User> {

  getPath(): string {
    return User.colName;
  }


}
