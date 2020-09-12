import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';

import { DragulaModule } from 'ng2-dragula';
import { TransporteurRoutingModule } from "./transporteur-routing.module";

import { taskReducer } from '../../taskboard-ngrx/store/taskboard.reducers';
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {TransporteursComponent} from "./component/transporteurs/transporteurs.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";


@NgModule({
    imports: [
        CommonModule,
        TransporteurRoutingModule,
        DragulaModule,
        StoreModule.forFeature('task', taskReducer),
        ArchwizardModule,
        FormsModule,
        NgSelectModule,
        NgbButtonsModule,
        NgxDatatableModule
    ],
    declarations: [
        TransporteursComponent,
    ]
})
export class TransporteursModule { }
