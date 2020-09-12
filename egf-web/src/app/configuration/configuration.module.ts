import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';

import { DragulaModule } from 'ng2-dragula';
import { ConfigurationRoutingModule } from "./configuration-routing.module";

import { taskReducer } from '../taskboard-ngrx/store/taskboard.reducers';
import {TypeDevisComponent} from "./component/type-devis/type-devis.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormsModule} from "@angular/forms";
import {TypeColisComponent} from "./component/type-colis/type-colis.component";
import {NatureColisComponent} from "./component/nature-colis/nature-colis.component";
import {VilleEscaleComponent} from "./component/ville-escale/ville-escale.component";
import {MatGoogleMapsAutocompleteModule} from "@angular-material-extensions/google-maps-autocomplete";
import {AgmCoreModule} from "@agm/core";
import {PointDepotComponent} from "./component/point-depot/point-depot.component";
import {TypeAcheminementComponent} from "./component/type-acheminement/type-acheminement.component";
import {MatCardModule} from "@angular/material/card";
import {NgSelectModule} from "@ng-select/ng-select";
import { SocieteComponent } from './component/societe/societe.component';
import {TrajetComponent} from "./component/trajet/trajet.component";
import {NgbCollapseModule, NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports: [
        CommonModule,
        ConfigurationRoutingModule,
        DragulaModule,
        StoreModule.forFeature('task', taskReducer),
        NgxDatatableModule,
        FormsModule,
        MatGoogleMapsAutocompleteModule,
        AgmCoreModule,
        MatCardModule,
        NgSelectModule,
        NgbCollapseModule,
        NgbTabsetModule
    ],
    declarations: [
        TypeDevisComponent,
        TypeColisComponent,
        NatureColisComponent,
        VilleEscaleComponent,
        PointDepotComponent,
        TypeAcheminementComponent,
        SocieteComponent,
        TrajetComponent,
    ],
    providers:[]
})
export class ConfigurationModule { }
