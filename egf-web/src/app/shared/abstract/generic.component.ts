import {OnDestroy, Optional} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {DialogService} from '../dialog/dialog.service';
import {TranslateService} from '@ngx-translate/core';
import {User} from '../../administration/users/model/user';
import {Profil} from '../../administration/profils/model/profil';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {UserService} from "../../administration/users/service/user.service";
import {NotificationService} from "../../components/extra/notification/notification.service";
import {Converter, Helpers, PageableQuery} from "../utility";
import {Sort} from "../services/sort";
import {AuthService} from "../services/auth.service";

export class GenericComponent implements OnDestroy {

  private subs: Subscription[] = [];

  loading = false;

  currentUser: User;

  pageableQuery: PageableQuery;

  roles: any;
  role: any;

  $roles = new BehaviorSubject(null);
  $currentUser = new BehaviorSubject(null);
  $currentRoles = new BehaviorSubject(null);

  constructor(
      protected notification: NotificationService,
      @Optional() protected dialog: DialogService,
      protected auth: AuthService,
  ) {

  }

  money(number: number): string {
    return Helpers.money(+number);
  }

  numberToLetter(num: number, add = false): string {
    const letter = Converter.numberToLetter(Math.abs(Math.trunc(num)));
    return letter[0].toUpperCase() + letter.substring(1) + (add ? ' de' : '') + ' XOF';
  }

  compareById(t1, t2): boolean {
    return Helpers.compareById(t1, t2);
  }

  compareThis(t1, t2): boolean {
    return Helpers.compareThis(t1, t2);
  }

  showError(error): void {
    console.log('Error: ' + error);
    if (error.error instanceof Error) {
      console.log('Client-side error occured.');
    } else {
      console.log('Server-side error occured.');
    }
    this.notification.error(this.getErrorMessage(error));
    this.hideLoading();
  }

  getErrorMessage(error): string {
    if (error.status >= 400 && error.status < 500) {
      return error.error;
    } else {
      return error.error && error.error.status >= 500
        ? error.error.message
        : 'Problème de connexion, verifiez que le serveur est en marche';
    }
  }

  showLoading(): void {
    this.loading = true;
  }

  hideLoading(): void {
    this.loading = false;
  }

  target(path, param): string[] {
    return [path, param];
  }

  // join(path, part): string {
  //   return Paths.join(path, part);
  // }

  setQueryParams(query, page, size, sort?: Sort): void {
    if (!this.pageableQuery) {
      this.pageableQuery = new PageableQuery();
    }
    this.pageableQuery.query = query;
    this.pageableQuery.page = page;
    this.pageableQuery.size = size;
    this.pageableQuery.sort = sort ? sort : Sort.DESC;
  }

  formatDate(date: any) {
    return Helpers.formatDate(date instanceof Timestamp ? date.toDate() : date instanceof Number ? new Date(+date) : date);
  }

  async toPromise(observable: Observable<any>): Promise<any> {
    return await Helpers.toPromise(observable);
  }

  protected addSub(sub: Subscription): void {
    this.subs.push(sub);
  }

  protected unsubs(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnDestroy(): void {
    this.unsubs();
  }

  has(key: string) {
    return this.$currentRoles && this.$currentRoles[key];
    // return true;
  }


}
