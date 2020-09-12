import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AbstractResolver} from "../../../../shared/abstract/abstract.resolver";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";

@Injectable()
export class UserListResolver extends AbstractResolver implements Resolve<any> {
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
    return User.colName;
  }
}
