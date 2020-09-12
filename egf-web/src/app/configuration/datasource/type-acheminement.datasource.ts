import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";
import {TypeAcheminementService} from "../service/type-acheminement.service";
import {TypeAcheminement} from "../model/type-acheminement";


export class TypeAcheminementDatasource extends AbstractCustomDatasource<TypeAcheminement> {

  constructor(protected service: TypeAcheminementService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['libelle','description'];
  }
}
