import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CyberService } from 'src/app/Services/cyber.service';
import { ExpenseService } from 'src/app/Services/expense.service';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Date variables
  dateForm!:UntypedFormGroup;

  // Arrays
  sales :any = [];
  expenses :any = [];
  cyberservices :any = [];

  constructor(private fbservice:UntypedFormBuilder, private salesservice:SaleService, 
    private expenseservice:ExpenseService, private cyberservice:CyberService) { }

  ngOnInit() {

    this.dateForm = this.fbservice.group({
      date:['',[Validators.required]]
    })

  }

  // Date getter function
  get date() {
    return this.dateForm.get('date');
  }

  // Date search
  datesearch(){

    const date = this.dateForm.value.date;

    console.log(date);

    // Search sales
    this.salesservice.getSalesByDate(date)
      .subscribe(data => {

        this.sales = data.sales;

        console.log("Sales: ",this.sales);

      },
      error =>{
        console.log(error);
      }
      );

      // Search cyber services
      this.cyberservice.getservicesbydate(date)
      .subscribe(data => {

        this.cyberservices = data.cyberservices;

        console.log("Cyber: ",this.cyberservices);

        },
        error =>{
          console.log(error);
        }
        );

      // Search expenses
      this.expenseservice.getexpensesbydate(date)
      .subscribe(data => {

        this.expenses = data.expenses;

        console.log("Expenses: ",this.expenses);

        },
        error =>{
          console.log(error);
        }
        );

  }

}
