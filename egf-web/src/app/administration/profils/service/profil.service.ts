import {Injectable} from '@angular/core';
import {AbstractService} from "../../../shared/abstract/abstract.service";
import {Profil} from "../model/profil";


@Injectable({
  providedIn: 'root'
})
export class ProfilService extends AbstractService<Profil> {

  getPath(): string {
    return Profil.colName;
  }

}
