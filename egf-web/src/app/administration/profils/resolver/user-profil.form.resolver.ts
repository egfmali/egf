import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {AbstractResolver} from "../../../shared/abstract/abstract.resolver";
import {UserService} from "../../users/service/user.service";
import {Profil} from "../model/profil";
import {ProfilService} from "../service/profil.service";

@Injectable({providedIn: "root"})
export class UserProfilFormResolver extends AbstractResolver {
  profil: Profil;

  constructor(
    protected userService: UserService,
    private userProfileService: ProfilService,
  ) {
    super(userService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const values = [this.getRole()];
    if (route.params) {
      const id = route.params.id;
      if (id && id !== 'new') {
        values.push(this.find(id));
      } else {
        this.profil = null;
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
      this.userProfileService.findSnapshot(id)
        .subscribe(response => {
          this.profil = response;
          resolve(response);
        }, reject);
    });
  }

  getRolePath(): string {
    return Profil.colName;
  }
}
