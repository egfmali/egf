import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {NatureColis} from "../model/nature-colis";


@Injectable({
  providedIn: 'root'
})
export class NatureColisService extends AbstractService<NatureColis> {

  getPath(): string {
    return NatureColis.colName;
  }

}
