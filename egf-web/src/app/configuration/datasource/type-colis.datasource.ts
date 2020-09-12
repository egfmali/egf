import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";
import {TypeColis} from "../model/type-colis";
import {TypeColisService} from "../service/type-colis.service";


export class TypeColisDatasource extends AbstractCustomDatasource<TypeColis> {

  constructor(protected service: TypeColisService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['libelle','code', 'description'];
  }
}
