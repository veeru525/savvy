import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  URL="http://localhost:3000/posts"


  constructor(public http:HttpClient) { }
getSchool():Observable<any>{
  return this.http.get(this.URL).pipe(
    map(value=>value)
  )
  
}
adddetails(data:any):Observable<any>{
  return this.http.post(this.URL,data).pipe(
  )
  
}
deleteSchool(id:number):Observable<any>{
  return this .http.delete(this.URL+'/'+id);
}


}
