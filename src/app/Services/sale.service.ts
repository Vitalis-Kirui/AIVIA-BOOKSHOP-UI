import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }
  
  // Registering new sale
  registernewsale(sale: any) {
    return this.http.post<any>(environment.newsale, sale);
  }

  // Getting all sales
  getallsales(): Observable<any>{
    return this.http.get<any>(environment.allsales);
  }

  // Getting today's sales
  gettodaysales(): Observable<any>{
    return this.http.get<any>(environment.todaysales);
  }

  // Getting sales by date
  getSalesByDate(date: Date): Observable<any>{
    return this.http.get<any>(environment.salesbydate+date);
  }

}
