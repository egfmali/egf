import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {PointDepot} from "../model/point-depot";


@Injectable({
  providedIn: 'root'
})
export class PointDepotService extends AbstractService<PointDepot> {

  getPath(): string {
    return PointDepot.colName;
  }

}
