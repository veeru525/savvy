import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name!: string;
  position!: number;
  weight!: number;
  symbol!: string;
  studentArray = [];



  constructor() { }



  ELEMENT_DATA = [
    { position: 1, name: 'ramu', class: '', rank: '' },
    { position: 2, name: 'mallesh', class: '', rank: '', },
    { position: 2, name: 'raju', class: '', rank: '', },

  ];
  displayedColumns: string[] = ['position', 'name', 'class', 'rank',];
  dataToDisplay = [...this.ELEMENT_DATA];

  dataSource = (this.dataToDisplay);


  ngOnInit() { }


  addData() {
    alert("data added");
    this.ELEMENT_DATA.push({ position: 0, name: "", class: "", rank: "" })
    console.log(this.ELEMENT_DATA);
  }

  removeData() {
    alert("data deleted");
  }
}
















