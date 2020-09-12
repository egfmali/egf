import {AbstractEntity} from "../../../shared/abstract/abstract.entity";

export class Role extends AbstractEntity<Role> {

  static  colName = "roles";

  name: string;
  description?: string;




}
