
import {AbstractEntity} from "../../shared/abstract/abstract.entity";
import {VilleEscale} from "./ville-escale";

export class Trajet extends AbstractEntity<Trajet> {
  static colName = "trajets";

  libelle: string;
  code: string;

  description?: string;
  pointDepart: string;
  pointArrivee: string;

  distance?: number;
  villeEscales?: string[];
}
