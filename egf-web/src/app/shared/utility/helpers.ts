import * as moment from 'moment';
import {Observable} from 'rxjs';
// import {Transporteur} from '../../../app/model/user';

export class Helpers {

  private static lazyComponentArray = {};

  public static formatDate(date?: Date, separator?, locale?, time?): string {
    if (!date) {
      date = new Date();
    }
    if (separator === undefined) {
      separator = '/';
    }
    if (locale === undefined) {
      locale = false;
    }
    let format = locale
      ? 'YYYY' + separator + 'MM' + separator + 'DD'
      : 'DD' + separator + 'MM' + separator + 'YYYY';
    format += time ? +' HH:mm:ss' : '';
    return Helpers.format(date, format);
  }




  public static fromaTimestamp(value?: any): Date {
    return new Date(value.seconds * 1000);
  }

  public static format(date?: Date, pattern?): string {

    if (!date) {
      date = new Date();
    }
    if (!pattern) {
      pattern = 'lll';
    }
    moment.locale('fr');
    return moment(date).format(pattern);
  }

  public static urlChunk(content: string, chunk: string): string {
    if (!content.startsWith('?')) {
      if (chunk.startsWith('&')) {
        chunk = chunk.substr(1);
        content = '?' + chunk;
      } else if (chunk.startsWith('?')) {
        content = chunk;
      } else {
        content = '?' + chunk;
      }
    } else {
      if (chunk.startsWith('?')) {
        content += '&' + chunk.substr(1);
      } else if (chunk.startsWith('&')) {
        content += chunk;
      } else {
        content += '&' + chunk;
      }
    }
    return content;
  }

  public static money(number: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF'
    }).format(number);
  }

  public static getOthers(data): any[] | any {
    return data !== null && data.hasOwnProperty('content') ? data.content : data;
  }

  public static checkReturn(ret): boolean {
    return ret === null || ret.hasOwnProperty('id') || (ret.hasOwnProperty('status') && ret.status === 'OK');
  }

  public static getTotalElements(data, models?: any[]): number {
    return !data
      ? 0
      : data.hasOwnProperty('totalElements')
        ? data.totalElements
        : data.hasOwnProperty('length')
          ? data.length
          : models
            ? models.length
            : 0;
  }

  public static saveInLocalStorage(key: string, value): void {
    localStorage.setItem(key, value);
  }

  public static getInLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  public static removeInLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  public static compareById(f1, f2): boolean {
    return f1 && f2 && f1.id === f2.id;
  }

  public static isNumeric(value): boolean {
    if (isNaN(+value)) {
      return false;
    }
    return true;
  }

  public static getAttachedFiles(value): any {
    if (value) {
      const attachedFiles = value.split(';');
      if (attachedFiles) {
        return attachedFiles[0];
      }
    }
    return '';
  }

  public static getListOthers(data): any[] {
    return data !== null && data.hasOwnProperty('content') ? data.content : data;
  }

  public static contains(key: string, value: string): boolean {
    const items = Helpers.getInLocalStorage(key).split(',');
    items.filter(item => {
      return decodeURI(item) === value;
    });
    return items.indexOf(value) !== -1;
  }

  public static containsRole(value: string): boolean {
    return Helpers.contains('r', value);
  }

  public static getMonthLastDay(year: number, month: number): number {
    const date = new Date(year, month, 0);
    const dateStr = Helpers.formatDate(date);
    const day = +dateStr.split('/')[0];
    return day;
  }

  public static getMonthInInterval(begin: Date, end: Date): string[] {
    const dateStr1 = Helpers.formatDate(begin);
    const dateStr2 = Helpers.formatDate(end);
    const year1: number = +dateStr1.split('/')[2];
    const year2: number = +dateStr2.split('/')[2];
    const month1: number = +dateStr1.split('/')[1];
    const month2: number = +dateStr2.split('/')[1];
    if (year1 > year2 || year1 === year2 && month1 > month2) {
      return [year1 + '-' + Helpers.formattedValue(month1)];
    }
    const results = [];
    const diff = year2 - year1;
    let stop = diff === 0 ? month2 : 12;
    let start = month1;
    for (let y = 0; y <= diff; y++) {
      for (let i = start; i <= stop; i++) {
        results.push((year1 + y) + '-' + Helpers.formattedValue(i));
      }
      start = 1;
      stop = y === diff - 1 ? month2 : 12;
    }
    return results;
  }

  public static getDayInInterval(begin: Date, end: Date): string[] {
    const dateStr1 = Helpers.formatDate(begin);
    const dateStr2 = Helpers.formatDate(end);
    const year1: number = +dateStr1.split('/')[2];
    const year2: number = +dateStr2.split('/')[2];
    const month1: number = +dateStr1.split('/')[1];
    const month2: number = +dateStr2.split('/')[1];
    const day1: number = +dateStr1.split('/')[0];
    const day2: number = +dateStr2.split('/')[0];
    if (year1 > year2 || (year1 === year2 && month1 > month2) || (year1 === year2 && month1 === month2 && day1 > day2)) {
      return [year1 + '-' + Helpers.formattedValue(month1) + '-' + Helpers.formattedValue(day1)];
    }
    const results = [];
    const diffYear = year2 - year1;
    let monthStop = diffYear === 0 ? month2 : 12;
    let monthStart = month1;
    for (let y = 0; y <= diffYear; y++) {
      const year = year1 + y;
      let dayStart = day1;
      for (let m = monthStart; m <= monthStop; m++) {
        const dayEnd = m === monthStop ? day2 : Helpers.getMonthLastDay(year, m);
        for (let d = dayStart; d <= dayEnd; d++) {
          results.push(year + '-' + Helpers.formattedValue(m) + '-' + Helpers.formattedValue(d));
        }
        dayStart = 1;
      }
      monthStart = 1;
      monthStop = y === diffYear - 1 ? month2 : 12;
    }
    return results;
  }

  public static getYearInInterval(begin: Date, end: Date): string[] {
    const dateStr1 = Helpers.formatDate(begin);
    const dateStr2 = Helpers.formatDate(end);
    const year1: number = +dateStr1.split('/')[2];
    const year2: number = +dateStr2.split('/')[2];
    if (year1 > year2) {
      return [year1.toString()];
    }
    const results = [];
    for (let i = year1; i <= year2; i++) {
      results.push(i.toString());
    }
    return results;
  }

  public static getDayCount(begin: Date = new Date(), end: Date): number {
    if (!end) {
      end = new Date();
    }
    const dateStr1 = Helpers.formatDate(begin);
    const dateStr2 = Helpers.formatDate(end);
    const year1: number = +dateStr1.split('/')[2];
    const year2: number = +dateStr2.split('/')[2];
    const month1: number = +dateStr1.split('/')[1];
    const month2: number = +dateStr2.split('/')[1];
    const day1: number = +dateStr1.split('/')[0];
    const day2: number = +dateStr2.split('/')[0];
    if (year1 > year2 || (year1 === year2 && month1 > month2) || (year1 === year2 && month1 === month2 && day1 > day2)) {
      return 0;
    }
    let count = 0;
    const diffYear = year2 - year1;
    let monthStop = diffYear === 0 ? month2 : 12;
    let monthStart = month1;
    for (let y = 0; y <= diffYear; y++) {
      const year = year1 + y;
      let dayStart = day1;
      for (let m = monthStart; m <= monthStop; m++) {
        const dayEnd = m === monthStop ? day2 : Helpers.getMonthLastDay(year, m);
        for (let d = dayStart; d <= dayEnd; d++) {
          count++;
        }
        dayStart = 1;
      }
      monthStart = 1;
      monthStop = y === diffYear - 1 ? month2 : 12;
    }
    return count;
  }

  private constructor() {
  }

  private static formattedValue(d: number): any {
    return (d <= 9 ? '0' + d : d);
  }

  static deepClone(items: any[]): any[] {
    return items.map(value => Object.assign({}, value));
  }

  static getName(item: any): string {
    return item ?
      item.firstName ?
        item.firstName + ' ' + item.lastName : '' + (item.lastName
        ? ' ' + item.lastName : item.socialReason
          ? item.socialReason : '') : '';
  }

  static strOrder(order: any): string {
    return order ? 'Commande N°' + order.id + ' du ' + Helpers.format(order.createdDate) : '';
  }

  static toPromise(observable: Observable<any>): Promise<any> {
    return observable.toPromise();
  }

  static formatDescription(str: string, length = 4) {
    if (!str) {
      return '';
    }
    str = str.trim();
    const words = str.split(' ');
    let description = '';
    let index = 1;
    for (const word of words) {
      description += ' ' + word;
      if (index % length === 0) {
        description += '<br>';
      }
      index++;
    }
    return description;
  }


  static compareThis(t1: any, t2: any) {
    return t1 === t2;
  }

  static sanitizeUndefined(object: {}): any {
    const keys = Object.keys(object);
    for (const key of keys) {
      if (object[key] === undefined) {
        object[key] = null;
      }
    }
    return object;
  }

  static getBaseUrl() {
    return window.location.origin
      ? window.location.origin + '/'
      : window.location.protocol + '/' + window.location.host + '/';
  }

  static buildUrl(part) {
    let baseUrl = Helpers.getBaseUrl();
    if (!baseUrl.endsWith('/') && !baseUrl.endsWith('#')) {
      baseUrl += '/';
    }
    if (!baseUrl.endsWith('#')) {
      baseUrl += '#';
    }
    return baseUrl + '/' + part;
  }

  static groupBy(items, key) {
    return items.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  static toArray(word) {
    const result = [];
    let begin = '';
    for (let w of word) {
      begin += w;
      result.push(begin);
    }
    return result;
  };

  static createKeywords(name: string):string[] {
    const arrName: string[] = [];
    const arrayName: string[] = [];
    let curName = '';
    arrayName.push(name.toLowerCase());
    name.split(' ').forEach(letter => {
      curName = letter.toString().toLowerCase();
      arrName.push(curName);
    });

    arrName.forEach(x => {
      const vals = Helpers.generateKeywords(x);
      vals.forEach(y => arrayName.push(y))
    });


    return arrayName;
  }

  static generateKeywords(name: string) {
    const arrName: string[] = [];
    let curName = '';
    name.split('').forEach(letter => {
      curName += letter;
      arrName.push(curName);
    });
    return arrName;
  }

  static ucFirst(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
