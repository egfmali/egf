import {AbstractCustomDatasource} from "../../shared/abstract/abstract.custom.datasource";;
import {PointDepot} from "../model/point-depot";
import {PointDepotService} from "../service/point-depot.service";


export class PointDepotDatasource extends AbstractCustomDatasource<PointDepot> {

  constructor(protected service: PointDepotService) {
    super(service);
  }

  filterKeys(): any[] {
    return ['libelle','code','ville','address','nameResponsable'];
  }
}
