import {Injectable} from '@angular/core';
import {AbstractService} from "../../shared/abstract/abstract.service";
import {VilleEscale} from "../model/ville-escale";
import {Societe} from "../model/societe";


@Injectable({
  providedIn: 'root'
})
export class SocieteService extends AbstractService<Societe> {

  getPath(): string {
    return Societe.colName;
  }

}
