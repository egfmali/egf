import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {VilleEscale} from "../model/ville-escale";


@Injectable({
  providedIn: 'root'
})
export class VilleEscaleService extends AbstractService<VilleEscale> {

  getPath(): string {
    return VilleEscale.colName;
  }

}
