import {AbstractCustomDatasource} from "../../../shared/abstract/abstract.custom.datasource";
import {ProfilService} from "../service/profil.service";
import {Profil} from "../model/profil";


export class ProfilDatasource extends AbstractCustomDatasource<Profil> {

  constructor(protected service: ProfilService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['name', 'description'];
  }
}
