import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TypeDevisComponent} from "./component/type-devis/type-devis.component";
import {TypeColisComponent} from "./component/type-colis/type-colis.component";
import {NatureColisComponent} from "./component/nature-colis/nature-colis.component";
import {VilleEscaleComponent} from "./component/ville-escale/ville-escale.component";
import {PointDepotComponent} from "./component/point-depot/point-depot.component";
import {TypeAcheminementComponent} from "./component/type-acheminement/type-acheminement.component";
import {SocieteComponent} from "./component/societe/societe.component";
import {TrajetComponent} from "./component/trajet/trajet.component";
import {AuthorizationGuard} from "../shared/authentification/guard/authorization.guard";


const routes: Routes = [
  {
    path: 'type-devis',
    component: TypeDevisComponent,
    data: {
      title: 'Type de devis',
      roles: ['TYPES_DEVIS','TYPE_DEVIS_ADD','TYPE_DEVIS_EDITE','TYPE_DEVIS_DELETE']
    },
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'type-colis',
    component: TypeColisComponent,
    data: {
      title: 'Type de colis',
      roles: ['TYPE_COLIS','TYPE_COLIS_ADD','TYPE_COLIS_EDITE','TYPE_COLIS_DELETE']
    }
  },
  {
    path: 'nature-colis',
    component: NatureColisComponent,
    data: {
      title: 'Nature du colis',
      roles: ['TYPE_COLIS','TYPE_COLIS_ADD','TYPE_COLIS_EDITE','TYPE_COLIS_DELETE']
    }
  },
  {
    path: 'ville-escale',
    component: VilleEscaleComponent,
    data: {
      title: 'Ville d\'escale'
    }
  },
  {
    path: 'point-depot',
    component: PointDepotComponent,
    data: {
      title: 'Point de depots'
    },
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'type-acheminement',
    component: TypeAcheminementComponent,
    data: {
      title: 'Type acheminements'
    },
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'societes',
    component: SocieteComponent,
    data: {
      title: 'Sociétes'
    },
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'trajets',
    component: TrajetComponent,
    data: {
      title: 'Trajets'
    },
    canActivate: [AuthorizationGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule { }