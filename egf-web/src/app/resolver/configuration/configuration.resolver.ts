import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AbstractResolver} from "../../shared/abstract/abstract.resolver";
import {UserService} from "../../administration/users/service/user.service";
import {ConfigurationService} from "../../service/configuration.service";

@Injectable()
export class ConfigurationResolver extends AbstractResolver implements Resolve<any> {

  configuration = {};

  constructor(
    protected userService: UserService,
    private configurationService: ConfigurationService,
  ) {
    super(userService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([this.findAll(), this.getRole()]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  private findAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.configurationService.findAll()
        .subscribe(response => {
          const configurations = response;
          for (const config of configurations) {
            this.configuration[config.uid] = config.value;
          }
          resolve(response);
        }, reject);
    });
  }

  getRolePath(): string {
    return 'configurations';
  }
}
