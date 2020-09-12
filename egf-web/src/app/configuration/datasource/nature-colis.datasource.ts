import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";
import {TypeColis} from "../model/type-colis";
import {NatureColisService} from "../service/nature-colis.service";


export class NatureColisDatasource extends AbstractCustomDatasource<TypeColis> {

  constructor(protected service: NatureColisService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['libelle','description'];
  }
}
