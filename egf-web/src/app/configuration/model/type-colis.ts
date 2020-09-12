
import {AbstractEntity} from "../../shared/abstract/abstract.entity";

export class TypeColis extends AbstractEntity<TypeColis> {
  static colName = "type_colis";

  libelle: string;
  code?: string;
  description?: string;
}
