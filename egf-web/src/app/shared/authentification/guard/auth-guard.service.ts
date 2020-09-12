import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return true;

    const isLoggedIn =  this.authService.isAuthenticated;

    // if (!isLoggedIn) {
    //   this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    //   return false;
    // }
    // return true;
  }
}
