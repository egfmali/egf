
import {AbstractEntity} from "../../shared/abstract/abstract.entity";

export class TypeDevis extends AbstractEntity<TypeDevis> {
  static colName = "type_devis";

  libelle: string;
  code?: string;
  description?: string;
}
