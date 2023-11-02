import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/Services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  // Form variables
  expenseform!: UntypedFormGroup;

  constructor(private fbservice:UntypedFormBuilder, private router:Router, private expenseservice: ExpenseService) { }

  ngOnInit() {

    // Expense form model
    this.expenseform = this.fbservice.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      totalcost: ['', Validators.required]
    })
  }

  // Getter functions
  get name() {
    return this.expenseform.get('name');
  }

  get description() {
    return this.expenseform.get('description');
  }

  get totalcost() {
    return this.expenseform.get('totalcost');
  }

   // Submit expense function
  submitexpense() {
    console.log(this.expenseform.value);

    // Posting an expense to database
    this.expenseservice.registernewexpense(this.expenseform.value)
      .subscribe(success => {
        console.log(success);
    this.expenseform.reset();       
      },
        error => {
        console.log(error);
      })

  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

}
