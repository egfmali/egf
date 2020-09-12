import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";
import {Societe} from "../model/societe";
import {SocieteService} from "../service/societe.service";


export class SocieteDatasource extends AbstractCustomDatasource<Societe> {

  constructor(protected service: SocieteService) {
    super(service);
  }

  filterKeys(): any[] {
    return [
        'libelle',
        'code',
        'pays',
        'ville',
        'phone',
        'email',
        'fax',
        'bp',
      'address'
    ];
  }
}
