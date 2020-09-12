import {Injectable} from '@angular/core';
import {AbstractService} from "../../../shared/abstract/abstract.service";
import {Expediteur} from "../model/expediteur";


@Injectable({
  providedIn: 'root'
})
export class ExpediteurService extends AbstractService<Expediteur> {

  getPath(): string {
    return Expediteur.colName;
  }


}
