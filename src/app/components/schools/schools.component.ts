import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
const element_data=[{id:1,name:"goutam",adress:"pedapudi",contact:533006},
                    {id:1,name:"goutam",adress:"pedapudi",contact:533006},
                    {id:1,name:"goutam",adress:"pedapudi",contact:533006},];

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
 public name: string='';
 public contact: number=0;
 public adress: string='';
 public element_data:[]=[];
 showFiller = false;
  constructor(private stdService:StudentService) { 
    
    
  }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'name', 'contact', 'adress'];
  dataSource = new MatTableDataSource(element_data);
 


  
  

  addSchool(){
      alert("school sucessfully added");
      element_data.push({id:0,name:'',adress:'',contact:0})
      console.log(this.dataSource);
    
      
  }
  
}
