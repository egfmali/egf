
import {AbstractEntity} from "../../shared/abstract/abstract.entity";
import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;

export class VilleEscale extends AbstractEntity<VilleEscale> {

  static colName = "ville_escales";

  pays: string;
  ville: string;
  geopoint: GeoPoint;
  address: string;
}
