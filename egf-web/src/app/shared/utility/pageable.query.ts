import {Sort} from '../services/sort';

export class PageableQuery {
    query: string;
    page: number;
    size: number;
    sort = Sort.DESC;

    constructor() {
    }

    static of(query: string, page: number, size: number, sort?: Sort): PageableQuery {
        const pageableQuery = new PageableQuery();
        pageableQuery.query = query;
        pageableQuery.page = page;
        pageableQuery.size = size;
        if (sort) {
            pageableQuery.sort = sort;
        }
        return pageableQuery;
    }
}
