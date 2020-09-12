import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Configuration} from '../model/configuration';
import {AbstractService} from "../shared/abstract/abstract.service";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends AbstractService<Configuration> {

  _configurations$ = new BehaviorSubject(null);

  private LAST_KEYS = [];

  get configurations$() {
    return this._configurations$;
  }

  getPath(): string {
    return 'configurations';
  }

  findByKeys(keys: string[]) {
    const collection = keys.length === 0 ? this.firestore.collection<Configuration>(this.getPath()) :
      this.firestore.collection<Configuration>(this.getPath(), ref => ref.where('uid', 'in', keys));
    return collection.valueChanges();
  }

  async save(entity) {
    const config = await this.findSnapshot(entity.uid).toPromise();
    return config ? this.updatePartial({value: entity.value}, entity.uid) : this.create(entity);
  }

  init(keys: string[]) {
    return new Promise(resolve => {
      this.findByKeys(keys).subscribe(configurations => {
        this._configurations$.next(this.transform(configurations));
        this.LAST_KEYS = keys;
        resolve(configurations);
      });
    });
  }

  setConfiguration(config: any) {
    this.configurations$.next(config);
  }

  private transform(configurations: Configuration[]) {
    const configuration = {};
    for (const config of configurations) {
      configuration[config.uid] = config.value;
    }
    return configuration;
  }
}
