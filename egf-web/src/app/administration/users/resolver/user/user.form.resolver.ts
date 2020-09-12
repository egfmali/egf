import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {AbstractResolver} from "../../../../shared/abstract/abstract.resolver";
@Injectable({providedIn: "root"})
export class UserFormResolver extends AbstractResolver {
  onUnitiesChanged: BehaviorSubject<any>;
  user: User;

  constructor(
    protected userService: UserService,
  ) {
    super(userService);
    this.onUnitiesChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const values = [this.getRole()];
    if (route.params) {
      const id = route.params.id;
      if (id && id !== 'new') {
        values.push(this.find(id));
      } else {
        this.user = null;
      }
    }
    return new Promise((resolve, reject) => {
      Promise.all(values).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  private find(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.findSnapshot(id)
        .subscribe(response => {
          this.user = response;
          resolve(response);
        }, reject);
    });
  }

  getRolePath(): string {
    return User.colName;
  }
}
