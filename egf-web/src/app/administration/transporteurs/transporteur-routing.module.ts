import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthorizationGuard} from "../../shared/authentification/guard/authorization.guard";
import {TransporteursComponent} from "./component/transporteurs/transporteurs.component";

const routes: Routes = [
  {
    path: '',
     component: TransporteursComponent,
    data: {
      title: 'Transporteurs',
      roles: ['TRANSPORTEURS','TRANSPORTEUR_ADD','TRANSPORTEUR_EDITE','TRANSPORTEUR_DELETE']
    },
    canActivate: [AuthorizationGuard]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporteurRoutingModule { }