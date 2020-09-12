import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {AbstractEntity} from "./abstract.entity";
import {AbstractService} from "./abstract.service";
import {Page} from "../utility";

export class AbstractCustomDatasource<T extends AbstractEntity<T>> extends DataSource<T> {

  protected itemsSubject = new BehaviorSubject<T[]>([]);
  protected allSubject = new BehaviorSubject<T[]>([]);
  protected loadingSubject = new BehaviorSubject<boolean>(false);

  public lengthSubject = new BehaviorSubject<number>(0);
  public loading$ = this.loadingSubject.asObservable();

  constructor(protected service: AbstractService<T>) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return this.itemsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.itemsSubject.complete();
    this.loadingSubject.complete();
  }

  loadItems(pageIndex = 0, pageSize = 10, filter = '', sortDirection = 'desc') {
    const dataSource = this.dataSource(pageIndex, pageSize, filter, sortDirection);
    if (!dataSource) return;
    this.loadingSubject.next(true);
    dataSource
      .subscribe((pageItem: Page<T>) => {
        this.allSubject.next(pageItem.items);
        this.itemsSubject.next(pageItem.items.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize));
        this.lengthSubject.next(pageItem.total);
        this.loadingSubject.next(false);
      }, () => {
        this.loadingSubject.next(false);
        this.itemsSubject.next([]);
      });
  }

  filter(pageIndex = 0, pageSize = 10, filter = '', sortDirection = 'desc') {
    this.allSubject
      .subscribe(values => {
        const data = values.filter(value => this.filterResult(value, filter));
        this.itemsSubject.next(data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize));
        this.lengthSubject.next(data.length);
      });
  }

  setPageItems(item: Page<T>) {
    this.loadingSubject.next(true);
    this.itemsSubject.next(item.items);
    this.lengthSubject.next(item.total);
    this.loadingSubject.next(false);
  }

  protected filterResult(value, filter) {
    if (!filter || filter.length === 0) {
      return true;
    }
    const keys = this.filterKeys();
    for (const key of keys) {
      const temp = value[key];
      if (temp && temp.toString().toLowerCase().includes(filter.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  
  protected dataSource(page = 0, pageSize = 10, filter = '', sortDirection = 'desc'): Observable<Page<T>> {
    return this.service.findAllPage(page, pageSize, filter, sortDirection)
  }

  filterKeys(): any[] {
    return [];
  }
}
