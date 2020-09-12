
import {ElementRef, ViewChild} from '@angular/core';
import {AbstractEntity} from './abstract.entity';
import {DialogService} from '../dialog/dialog.service';
import {TranslateService} from '@ngx-translate/core';
import {GenericComponent} from './generic.component';
import {fromEvent, merge, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Location} from "@angular/common";
import {UserService} from "../../administration/users/service/user.service";
import {NotificationService} from "../../components/extra/notification/notification.service";
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";
import {AbstractService} from "./abstract.service";
import {AbstractCustomDatasource} from "./abstract.custom.datasource";
import {AuthService} from "../services/auth.service";

export class GenericListComponent<T extends AbstractEntity<T>, R extends AbstractService<T>> extends GenericComponent {

  dataSource: AbstractCustomDatasource<T> | null;

  totalElements = 0;
  row = 10;

  paginator: MatPaginator;

  filter: ElementRef;

  sort: MatSort;

  protected _unsubscribeAll: Subject<any>;

  constructor(
    protected notification: NotificationService,
    protected dialog: DialogService,
    protected service: R,
    protected auth: AuthService,
    protected location? : Location,
  ) {
    super(notification, dialog, auth);
  }

  delete(component, paramValue?): void {
    this.showLoading();
    // this.translateService.get(['APP.DELETE_CONFIRM', 'APP.SUCCESS', 'APP.DELETE'], {value: paramValue})
    //   .subscribe(values => {
    //     const matDialogRef = this.dialogService.openConfirmDialog(values['APP.DELETE_CONFIRM']);
    //     matDialogRef.afterClosed().subscribe(response => {
    //       if (response) {
    //         this.service.delete(component.uid).then(async value => {
    //           this.dataSource.loadItems(0, 10);
    //           this.notificationService.success(values['APP.SUCCESS'], values['APP.DELETE']);
    //           this.hideLoading();
    //         }, error => {
    //           this.hideLoading();
    //           this.showError(error);
    //         });
    //       } else {
    //           this.hideLoading();
    //       }
    //     });
    //   });
  }

  page($event: PageEvent): void {
    // $event.pageIndex, $event.pageSize
    this.dataSource.loadItems($event.pageIndex, $event.pageSize);
  }

  gotoEditComponent(component: any): void {
  }

  refresh() {
    this.dataSource.loadItems(0, 10);
  }

   initDatasource() {}

  init() {
    this.initDatasource();
    this.dataSource.loadItems();
    this.dataSource.loading$.subscribe(loading => {
      this.loading = loading;
    });

    if (this.filter) {
      fromEvent(this.filter.nativeElement, 'keyup')
        .pipe(
          takeUntil(this._unsubscribeAll),
          debounceTime(150),
          distinctUntilChanged()
        )
        .subscribe(() => {
          if (!this.dataSource) {
            return;
          }
          this.dataSource.filter(0, 10, this.filter.nativeElement.value);
        });
    }

    if (this.sort) {
      merge(this.sort.sortChange, this.paginator.page)
        .subscribe(__ => {
          this.dataSource.filter(this.paginator.pageIndex,
            this.paginator.pageSize,
            this.filter.nativeElement.value,
            this.sort.direction);
        });
    }
  }

  goBack(){
    this.location.back();
  }




}
