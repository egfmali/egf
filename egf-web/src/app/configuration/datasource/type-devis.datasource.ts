import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";
import {TypeDevisService} from "../service/type-devis.service";
import {TypeDevis} from "../model/type-devis";


export class TypeDevisDatasource extends AbstractCustomDatasource<TypeDevis> {

  constructor(protected service: TypeDevisService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['libelle','code', 'description'];
  }
}
