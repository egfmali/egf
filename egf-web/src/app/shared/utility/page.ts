export class Page<T> {

  constructor(public items: T[], public total: number) {
  }

  static of<T>(items: T[], total: number) {
    return new Page(items, total);
  }
}
