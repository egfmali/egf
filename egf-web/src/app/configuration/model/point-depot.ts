
import {AbstractEntity} from "../../shared/abstract/abstract.entity";
import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;

export class PointDepot extends AbstractEntity<PointDepot> {

  static colName = "point_depots";

  libelle: string;
  code: string;
  pays?: string;
  ville?: string;
  geopoint?: GeoPoint;
  address?: string;
  uidResponsable?: string;
  nameResponsable?: string;
}
