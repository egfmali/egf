import {Injectable} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NotificationService} from "../../../components/extra/notification/notification.service";
import {Router} from "@angular/router";
import {Role} from "../../../administration/users/model/role";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(
    private router: Router,
    private auth: AuthService,
    private notification: NotificationService,
    ) {

  }


  async isAuthorized(allowedRoles: string[], title:string): Promise<boolean> {

    const isLoggedIn =  await this.auth.currentUser.toPromise();

    const user = this.auth.user$.getValue();
    const profil = this.auth.profil$.getValue();
    const roles = this.auth.roles$.getValue();


    console.log('<<<=== INFO 1 ===>>>')
    console.log('IsLoggedIn ===>>>', isLoggedIn)
    console.log('PAGE ===>>>', title)
    console.log('USER ===>>>', user)
    console.log('PROFIL ===>>>', profil)
    console.log('ROLES ===>>>', roles)
    console.log('ALLOWED ROLES ===>>>', allowedRoles)


    if (!isLoggedIn || user === null || user === undefined) {

      console.log('IsLoggedIn ===>>>', isLoggedIn)
      console.log('Transporteur ===>>>', user)
      console.log('<<<=== Utilisateur non identitié ===>>>')

      // this.router.navigate(['/auth/login'] );
      this.notification.error('Utilisateur non identitié','Utilisateur invalide');
      // return;
      return false;
    }


    if (roles == null || roles === undefined || roles.length < 1) {

      console.log('MY ROLES ===>>>', roles)
      console.log('<<<=== Invalid role ===>>>')

      // this.router.navigate(['/auth/login'] );
      this.notification.error('Utilisateur n\'a pas ce droit','Utilisateur non autorisé');
      // return;
     return false;
    }

    const isauthorized = roles.some((r:Role) => allowedRoles.includes(r.name));

    console.log('<<<=== INFO 2 ===>>>')

    console.log('Allowed Roles', allowedRoles);
    console.log('My ROLES', roles);
    console.log('isAuthorized', isauthorized);

    if (isauthorized) {
      return isauthorized;
    }

    this.notification.error(`Utilisateur n\'a pas droit à la page <<${title}>>`,'Utilisateur non autorisé');
    this.notification.error(`Utilisateur n\'a pas droit à la page <<${title}>>`,'Utilisateur non autorisé');
    this.notification.error(`Utilisateur n\'a pas droit à la page <<${title}>>`,'Utilisateur non autorisé');
    return isauthorized;

  }




}
