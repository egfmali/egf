import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';

import { DragulaModule } from 'ng2-dragula';
import { ProfilsRoutingModule } from "./profils-routing.module";

import { taskReducer } from '../../taskboard-ngrx/store/taskboard.reducers';
import {ProfilListComponent} from "./component/profil-list/profil-list.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {ProfilRolesComponent} from "./component/profil-roles/profil-roles.component";
import {PickListModule} from "primeng/picklist";


@NgModule({
    imports: [
        CommonModule,
        ProfilsRoutingModule,
        DragulaModule,
        StoreModule.forFeature('task', taskReducer),
        NgxDatatableModule,
        FormsModule,
        MatPaginatorModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        PickListModule
    ],
    declarations: [
        ProfilListComponent,
        ProfilRolesComponent,
    ],
    providers:[]
})
export class ProfilsModule { }
