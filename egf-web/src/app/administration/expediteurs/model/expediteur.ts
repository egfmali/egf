
import * as firebase from 'firebase';
import {AbstractEntity} from "../../../shared/abstract/abstract.entity";
import {User} from "../../users/model/user";

export class Expediteur extends AbstractEntity<Expediteur> {

  user: User
  code: string;

  static colName = "expediteurs";
}
