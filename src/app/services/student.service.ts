import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 


  constructor(public httpClient:HttpClient) { }
getSchool(){
  return [{id:1,name:"goutham",adress:"pedapudi",contact:9000000099},
              {id:2,name:"gmghs",adress:"pedapudi",contact:8000000099},]
}


}
