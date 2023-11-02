import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }
  
  // registering a staff
  registernewstaff(staff: any) {
    return this.http.post<any>(environment.newstaff, staff);
  }

  // getting all the staffs
  getallstaffs(): Observable<any>{
    return this.http.get<any>(environment.allstaffs);
  }

  // Getting ceos staffs
  getceosstaffs(): Observable<any>{
    return this.http.get<any>(environment.ceostaffs);
  }

  // Getting supervisor staffs
  getsupervisorstaffs(): Observable<any> {
    return this.http.get<any>(environment.supervisorstaffs);
  }

  // Getting management staffs
  getmanagementstaffs(): Observable<any> {
    return this.http.get<any>(environment.managementstaffs);
  }

  // Getting attendant staffs
  getattendantstaffs(): Observable<any> {
    return this.http.get<any>(environment.attendantstaffs);
  }

  // Getting single staff details
  getsinglestaff(id: any): Observable<any>{
    return this.http.get<any>(environment.singlestaff+id)
  }

  // Deleting a staff
  deletestaff(id: any): Observable<any>{
    return this.http.delete<any>(environment.deletestaff + id);
  }

  // Updating staff
  updatestaff(id: any, newstaffdata : any): Observable<any>{
    return this.http.put<any>(environment.updatestaff + id, newstaffdata);
  };

  // Starting session
  startsession(nationalid: any): Observable<any>{
    return this.http.get<any>(environment.startsession + nationalid);
  }

}
