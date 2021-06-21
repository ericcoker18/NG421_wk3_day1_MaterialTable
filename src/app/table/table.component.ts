import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Avengers } from '../interfaces/Iavengers';
import { AvengerServiceService } from '../services/avenger-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'alias', 'age', 'currentMember', 'memberSince', 'powers'];
  dataSource: MatTableDataSource<Avengers>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;


  constructor(private avengers: AvengerServiceService) { 

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.avengers.GetMembers());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}
