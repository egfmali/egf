
import {AbstractEntity} from "../../shared/abstract/abstract.entity";

export class NatureColis extends AbstractEntity<NatureColis> {
  static colName = "nature_colis";

  libelle: string;
  description?: string;
}
