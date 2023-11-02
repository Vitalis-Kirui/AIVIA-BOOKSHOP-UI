import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CyberService {

  constructor(private http: HttpClient) { }
  
  // Registering new cyber Service
  registercyberservice(cyberservice: any) {
    return this.http.post<any>(environment.registercyberservice, cyberservice)
  }

  // Get all cyber Services
  getallcyberservices(): Observable <any>{
    return this.http.get<any>(environment.allcyberservices);
  }

  // Get today's cyber services
  gettodaycyberservices(): Observable<any>{
    return this.http.get<any>(environment.todaycyberservices);
  }

  // Get services by date
  getservicesbydate(date: Date): Observable<any>{
    return this.http.get<any>(environment.cyberbydate+date);
  }

}
