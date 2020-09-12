import {AbstractEntity} from "../shared/abstract/abstract.entity";

export class Configuration extends AbstractEntity<Configuration> {
  uid: string;
  value: string;
}
