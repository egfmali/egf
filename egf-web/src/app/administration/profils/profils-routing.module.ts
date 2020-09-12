import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProfilListComponent} from "./component/profil-list/profil-list.component";
import {ProfilRolesComponent} from "./component/profil-roles/profil-roles.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilListComponent,
    data: {
      title: 'Profils',
      roles: ['PROFILS','PROFIL_ADD','PROFIL_EDITE','PROFIL_DELETE','PROFIL_ROLES']
    }
  },
  {
    path: ':uid/roles',
    component: ProfilRolesComponent,
    data: {
      title: 'Profil roles',
      roles: ['PROFIL_ROLES']
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilsRoutingModule { }