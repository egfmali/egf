import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {TypeColis} from "../model/type-colis";


@Injectable({
  providedIn: 'root'
})
export class TypeColisService extends AbstractService<TypeColis> {

  getPath(): string {
    return TypeColis.colName;
  }

}
