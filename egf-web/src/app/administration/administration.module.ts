import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';

import { DragulaModule } from 'ng2-dragula';
import { AdministrationRoutingModule } from "./administration-routing.module";

import { taskReducer } from '../taskboard-ngrx/store/taskboard.reducers';


@NgModule({
    imports: [
        CommonModule,
        AdministrationRoutingModule,
        DragulaModule,
        StoreModule.forFeature('task', taskReducer)
    ],
    declarations: [

    ]
})
export class AdministrationModule { }
