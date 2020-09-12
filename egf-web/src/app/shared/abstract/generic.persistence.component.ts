import {AbstractControl, FormGroup, Validators} from '@angular/forms';

import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AbstractEntity} from './abstract.entity';
import {GenericComponent} from './generic.component';
import {DialogService} from '../dialog/dialog.service';
import {Location} from "@angular/common";
import {UserService} from "../../administration/users/service/user.service";
import {NotificationService} from "../../components/extra/notification/notification.service";
import {Helpers} from "../utility";
import {AbstractService} from "./abstract.service";
import {AuthService} from "../services/auth.service";

export class GenericPersistenceComponent<T extends AbstractEntity<T>, R extends AbstractService<T>> extends GenericComponent {

  form: FormGroup;
  minLength = 2;
  maxLength = 255;

  constructor(
    protected notification: NotificationService,
    protected dialog: DialogService,
    protected auth: AuthService,
    protected service: R,
    protected router: Router,
    protected location?: Location,
  ) {
    super(notification, dialog, auth);
  }

  subCtrlVC(ctrlName: string, observer): void {
    this.addSub(this.$ctrlValueChanges(ctrlName).subscribe(observer));
  }

  $ctrlValueChanges(ctrlName: string): Observable<any> {
    return this.ctrl(ctrlName).valueChanges;
  }

  ctrlSetValue(ctrlName: string, value: any): void {
    this.ctrl(ctrlName).setValue(value);
  }

  ctrl(ctrlName: string): AbstractControl {
    return this.form.get(ctrlName);
  }

  checkReturn(ret: any): boolean {
    return Helpers.checkReturn(ret);
  }

  get strRequiredMinMax() {
    return [
      Validators.required,
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ];
  }

  strMinMax(min = this.minLength, max = this.maxLength) {
    return [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ];
  }

  strMultiple(min = this.minLength, max = this.maxLength) {
    return [
      Validators.required,
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ];
  }

  get strRequiredMax() {
    return [Validators.required, Validators.maxLength(this.maxLength)];
  }

  get strRequiredMin(): Validators[] {
    return [Validators.required, Validators.minLength(this.minLength)];
  }

  protected navigateToList(message: string, action: any, path?): void {
    const booleanPromise = path
      ? this.router.navigateByUrl(path)
      : Promise.resolve(true);
    booleanPromise.then(result => {
      if (result) {
        this.notification.success(message, action);
      }
    });
  }

  printElement(elementID, title = ''): void {
    this.showLoading();
    const printElement = document.getElementById(elementID);
    const data = printElement.innerHTML;
    const doc = window.document.body.innerHTML;
    window.document.body.innerHTML = data;
    window.print();
    window.document.body.innerHTML = doc;
    window.close();
    window.location.reload();
  }

  // SANOGO coding...
  goBack() {
    console.log("going back")
    this.location.back();
  }
}
