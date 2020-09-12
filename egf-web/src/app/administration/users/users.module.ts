import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';

import { DragulaModule } from 'ng2-dragula';
import { UserRoutingModule } from "./user-routing.module";

import { UserListComponent } from "./component/user-list/user-list.component";
import { taskReducer } from '../../taskboard-ngrx/store/taskboard.reducers';
import {UserProfilComponent} from "./component/user-profil/user-profil.component";
import { UserComponent } from './component/user/user.component';
import {ArchwizardModule} from "angular-archwizard";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        DragulaModule,
        StoreModule.forFeature('task', taskReducer),
        ArchwizardModule,
        FormsModule,
        NgSelectModule,
        NgbButtonsModule
    ],
    declarations: [
        UserListComponent,
        UserProfilComponent,
        UserComponent,
    ]
})
export class UsersModule { }
