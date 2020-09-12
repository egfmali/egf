import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {TypeDevis} from "../model/type-devis";


@Injectable({
  providedIn: 'root'
})
export class TypeDevisService extends AbstractService<TypeDevis> {

  getPath(): string {
    return TypeDevis.colName;
  }

}
