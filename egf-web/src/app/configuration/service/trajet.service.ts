import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {Trajet} from "../model/trajet";

@Injectable({
  providedIn: 'root'
})
export class TrajetService extends AbstractService<Trajet> {

  getPath(): string {
    return Trajet.colName;
  }

}
