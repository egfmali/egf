import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";
import {Trajet} from "../model/trajet";
import {TrajetService} from "../service/trajet.service";


export class TrajetDatasource extends AbstractCustomDatasource<Trajet> {

  constructor(protected service: TrajetService) {
    super(service);
  }

  filterKeys(): any[] {
    return [
        'libelle',
        'code',
        'pointDepart',
        'pointArrivee',
        'distance',
    ];
  }
}
