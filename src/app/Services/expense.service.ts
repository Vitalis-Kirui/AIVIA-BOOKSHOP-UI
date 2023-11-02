import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  // registering new expense
  registernewexpense(expense: any) {
    return this.http.post<any>(environment.newexpense, expense);
  }

  // Get all the expenses
  getallexpenses(): Observable<any>{
    return this.http.get<any>(environment.allexpenses);
  }

  // Getting today's expenses
  gettodayexpenses(): Observable<any> {
    return this.http.get<any>(environment.todayexpenses);
  }
  
  // Get expenses by date
  getexpensesbydate(date: Date): Observable<any> {
    return this.http.get<any>(environment.expensesbydate+date);
  }

}
