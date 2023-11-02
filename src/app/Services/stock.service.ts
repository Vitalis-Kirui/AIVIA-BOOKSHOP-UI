import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  // Adding new stock
  addnewstock(stock: any) {
    return this.http.post<any>(environment.addstock, stock);
  }

  // Getting all the stocks
  getallstock(): Observable<any>{
    return this.http.get<any>(environment.allstock);
  }

  // Fetching a single stock data
  getsinglestock(id: any): Observable<any>{
    return this.http.get<any>(environment.singlestock + id);
  }

  // Deleting stock
  deletestock(id: any): Observable<any>{
    return this.http.delete<any>(environment.deletestock + id);
  }

  // Updating stock
  updatestock(id: any, updatedata: any): Observable<any>{
    return this.http.put<any>(environment.updatestock +id, updatedata);
  }
  
}
