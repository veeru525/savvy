import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface PeriodicElement {
  schoolname: string;
  no: number;
  contact: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, schoolname: 'Gmghs', contact: 984523452, address: 'pedapudi'},
  {no: 2, schoolname: 'goutham', contact:8945678672, address: 'pedapudi'},
  {no: 3, schoolname: 'zpps', contact: 7895673452, address: 'peddada'},
  {no: 4, schoolname: 'zphs', contact: 9885334545, address: 'mamidada'},
  {no: 5, schoolname: 'gamyam', contact:8966676564, address: 'mamidada'},
  {no: 6, schoolname: 'aditya', contact: 8922223389, address: 'anaparthi'},
  
];

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  name: string | undefined;
  position!: number;
  weight!: number;
  symbol!: string;
  dialog: any;
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['no', 'schoolname', 'contact', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open({
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
}
