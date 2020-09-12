
import {AbstractEntity} from "../../shared/abstract/abstract.entity";
import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;

export class Societe extends AbstractEntity<Societe> {

  static colName = "societes";

  libelle: string;

  code: string;
  phone: string;
  email: string;

  pays: string;
  ville: string;

  fax: string;
  bp: string;

  address: string;
}
