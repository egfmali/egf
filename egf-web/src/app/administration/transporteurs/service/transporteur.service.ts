import {Injectable} from '@angular/core';
import {Transporteur} from "../model/transporteur";
import {AbstractService} from "../../../shared/abstract/abstract.service";


const defaultValue = null;

@Injectable({
  providedIn: 'root'
})
export class TransporteurService extends AbstractService<Transporteur> {

  getPath(): string {
    return Transporteur.colName;
  }


}
