
import {Role} from "../../users/model/role";
import {AbstractEntity} from "../../../shared/abstract/abstract.entity";

export class Profil extends AbstractEntity<Profil> {
  static colName = "profils";

  name: string;
  description?: string;
  roles?: Role[] = [];
}
