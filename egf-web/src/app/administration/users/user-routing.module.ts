import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './component/user-list/user-list.component';
import {UserProfilComponent} from "./component/user-profil/user-profil.component";
import {UserComponent} from "./component/user/user.component";
import {AuthorizationGuard} from "../../shared/authentification/guard/authorization.guard";

const routes: Routes = [
  {
    path: '',
     component: UserListComponent,
    data: {
      title: 'Utilisateurs',
      roles: ['USERS','USER_ADD','USER_EDITE','USER_DELETE']
    },
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'profil',
    component: UserProfilComponent,
    data: {
      title: 'Transporteur profil',
    },
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'nouveau',
    component: UserComponent,
    data: {
      title: 'Transporteur profil'
    },
    canActivate: [AuthorizationGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }