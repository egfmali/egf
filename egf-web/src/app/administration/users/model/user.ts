
import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;
import {AbstractEntity} from "../../../shared/abstract/abstract.entity";
import {Profil} from "../../profils/model/profil";

export class User extends AbstractEntity<User> {

  email: string;
  password: string;

  name?: string;
  phone?: string;
  address?: string;
  geopoint?: GeoPoint;
  photoUrl?: string;
  providerId?: string;
  status?: boolean;
  profil_uid: string;
  profil_name: string;

  static colName = "users";
}
