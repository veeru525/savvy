import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table'
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { StudentService } from 'src/app/services/student.service';

export interface School {
  id:number,
  name:string,
  place: string,
  students: number
}


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
 public  schoolform:FormGroup=new FormGroup({
name :new FormControl(),
  place:new FormControl() ,
  students:new FormControl() 
  })
  dataSource!: School[];
  showFiller = false;

  constructor(private stdService: StudentService) {


  }

  ngOnInit(): void {

    this.stdService.getSchool().subscribe(
      (responce: any) => {
        this.dataSource = responce;
        console.log(responce)
        this.filterData = new MatTableDataSource(this.dataSource);
      },

      (err: any) => { alert("internal error") }
    )
    this.stdService.adddetails(this.schoolform.value);

  }

  //  dataSource=[{
  //   name:'raju',
  //   place:'Hyd',
  //   students:40
  //  },
  //  {
  //   name:'ravi',
  //   place:'kkd',
  //   students:30
  //  },
  //  {name:'ravi',
  //   place:'kkd',
  //   students:55
  //  }];

  displayedColumns: string[] = ['s.no', 'name', 'place', 'students','action']  // dataSource = new MatTableDataSource(this.element_data)

  filterData = new MatTableDataSource(this.dataSource);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.dataSource.length);

    this.stdService.adddetails(this.schoolform.value).subscribe(
      (data:any)=>{this.dataSource=data;
                    location.reload();},
      (err:any)=>{alert("internal error")}
    )

    confirm("Do you Register new school?");
    this.table.renderRows();
    console.log(this.schoolform.value);
   
  }
  removeData(id:number) {
    this.stdService.deleteSchool(id).subscribe({
      next: ()=>{
        this.dataSource = this.dataSource.filter( (school)=>{
          school.id !== id
        });
        location.reload();
      
      },
      error: ()=>{},
      complete: () =>{}
    });
    confirm("Do you remove row");
    this.table.renderRows();
    console.log(this.dataSource,id);
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterData.filter = filterValue.trim().toLowerCase();
    console.log(this.filterData);
  }
}
