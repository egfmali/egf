import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthorizationService} from "./authorization.service";

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {

  constructor(
      private authorizationService: AuthorizationService,
      ) {
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {

    const allowedRoles = route.data.roles;
    const title = route.data.title;

    return true;

    // return this.authorizationService.isAuthorized(allowedRoles,title);
  }

  canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const allowedRoles = route.data.roles;
    const title = route.data.title;

    return true;

    // return this.authorizationService.isAuthorized(allowedRoles,title);
  }

}
