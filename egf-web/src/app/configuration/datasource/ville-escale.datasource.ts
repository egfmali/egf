import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";
import {TypeDevisService} from "../service/type-devis.service";
import {TypeDevis} from "../model/type-devis";
import {VilleEscaleService} from "../service/ville-escale.service";
import {VilleEscale} from "../model/ville-escale";


export class VilleEscaleDatasource extends AbstractCustomDatasource<VilleEscale> {

  constructor(protected service: VilleEscaleService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['ville','address'];
  }
}
