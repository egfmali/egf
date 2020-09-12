import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthorizationGuard} from "../../shared/authentification/guard/authorization.guard";
import {ExpediteursComponent} from "./component/expediteurs/expediteurs.component";

const routes: Routes = [
  {
    path: '',
     component: ExpediteursComponent,
    data: {
      title: 'Expediteurs',
      roles: ['EXPEDITEURS','EXPEDITEUR_ADD','EXPEDITEUR_EDITE','EXPEDITEUR_DELETE']
    },
    canActivate: [AuthorizationGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpediteurRoutingModule { }