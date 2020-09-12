import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AbstractResolver} from "../../../shared/abstract/abstract.resolver";
import {UserService} from "../../users/service/user.service";
import {Profil} from "../model/profil";

@Injectable()
export class UserProfilListResolver extends AbstractResolver implements Resolve<any> {
  constructor(
    protected userService: UserService,
  ) {
    super(userService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getRole(),
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getRolePath(): string {
    return Profil.colName;
  }
}
