
import {AbstractEntity} from "../../shared/abstract/abstract.entity";

export class TypeAcheminement extends AbstractEntity<TypeAcheminement> {
  static colName = "type_acheminements";

  libelle: string;
  description?: string;
}
