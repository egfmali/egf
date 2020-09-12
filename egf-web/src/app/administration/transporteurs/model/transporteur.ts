
import * as firebase from 'firebase';
import {AbstractEntity} from "../../../shared/abstract/abstract.entity";
import {User} from "../../users/model/user";

export class Transporteur extends AbstractEntity<Transporteur> {

  user: User
  code: string;
  type: string;

  static colName = "transporteurs";
}
