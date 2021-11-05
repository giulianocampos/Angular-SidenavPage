import { Sugestao } from './../create-sugestao/sugestao.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Read2TableDataSource } from './read2-table-datasource';

@Component({
  selector: 'app-read2-table',
  templateUrl: './read2-table.component.html',
  styleUrls: ['./read2-table.component.css']
})
export class Read2TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Sugestao>;
  dataSource: Read2TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', "explicacao"];

  constructor() {
    this.dataSource = new Read2TableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
