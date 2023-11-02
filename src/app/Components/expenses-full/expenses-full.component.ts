import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/Services/expense.service';

@Component({
  selector: 'app-expenses-full',
  templateUrl: './expenses-full.component.html',
  styleUrls: ['./expenses-full.component.css']
})
export class ExpensesFullComponent implements OnInit {

  // Expense array
  expenses: any = [];

  // Grand total 
  grandtotal :any;

  constructor(private router : Router, private expenseservice: ExpenseService) { }

    // Back to reports function
  backtoreports() {
    this.router.navigate(['reports']);
  }

  ngOnInit() {

    // Full expense report
    this.expenseservice.getallexpenses()
      .subscribe(data => {
        this.expenses = data.expenses;
        console.log(this.expenses);

        this.grandtotal = data.grandtotal;
      },
        error => {
          console.log(error);
        }
      )

  }

}
