import { Sugestao } from './../create-sugestao/sugestao.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Sugestao[] = [
  {id: 1, name: 'Hydrogen', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 2, name: 'Helium', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 3, name: 'Lithium', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 4, name: 'Beryllium', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 5, name: 'Boron', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 6, name: 'Carbon', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 7, name: 'Nitrogen', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 8, name: 'Oxygen', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 9, name: 'Fluorine', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 10, name: 'Neon', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 11, name: 'Sodium', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 12, name: 'Magnesium', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 13, name: 'Aluminum', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 14, name: 'Silicon', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 15, name: 'Phosphorus', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 16, name: 'Sulfur', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 17, name: 'Chlorine', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 18, name: 'Argon', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 19, name: 'Potassium', explicacao: "teste de explicação, hi hi hi hi hi hi"},
  {id: 20, name: 'Calcium', explicacao: "teste de explicação, hi hi hi hi hi hi"},
];

/**
 * Data source for the Read2Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class Read2TableDataSource extends DataSource<Sugestao> {
  data: Sugestao[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Sugestao[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Sugestao[]): Sugestao[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Sugestao[]): Sugestao[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
