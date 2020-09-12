import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable ,  Subscription } from 'rxjs';
;
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {Helpers} from "../../../../shared/utility/helpers";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  @ViewChild('todoTitle', {static: false}) titleInputRef: ElementRef;
  @ViewChild('todoMessage', {static: false}) messageInputRef: ElementRef;
  subscription: Subscription;
  usersState: Observable<User[]>;

  users$: Observable<User[]>;

  public todo: User[];
  public inProcess: User[];
  public backLog: User[];
  public completed: User[];

  constructor(
      private userService: UserService,
      private elRef: ElementRef,
      private store: Store<User>,
      ) {

  }

  ngOnInit() {
    this.usersState = this.store.select('user');

    this.users$ = this.userService.findAll();

    this.subscription = this.usersState.subscribe(
      data => {
        // this.todo = data.todo;
        // this.inProcess = data.inProcess;
        // this.backLog = data.backLog;
        // this.completed = data.completed;
      }
    );
  }

  onAddTask() {
    if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
      this.store.dispatch(null);
    }
    this.titleInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.value = "";
    this.titleInputRef.nativeElement.focus();
  }


  toDate(value: any) {
    return Helpers.fromaTimestamp(value);
  }
}
