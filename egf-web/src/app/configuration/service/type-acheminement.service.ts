import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {NatureColis} from "../model/nature-colis";
import {TypeAcheminement} from "../model/type-acheminement";


@Injectable({
  providedIn: 'root'
})
export class TypeAcheminementService extends AbstractService<TypeAcheminement> {

  getPath(): string {
    return TypeAcheminement.colName;
  }

}
