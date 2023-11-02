import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleService } from 'src/app/Services/sale.service';
import { StockService } from 'src/app/Services/stock.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  // Forms variables
  salesform!: UntypedFormGroup;

  // Products array
  allstocks: any = [];

  // Display variables

  billingready: boolean = false;
  
  constructor(private fbservice: UntypedFormBuilder, private router: Router,
    private salesservice: SaleService, private stockservice:StockService) { }

  // Add to billing report
  additem() {

    this.salesservice.registernewsale(this.salesform.value)
      .subscribe(data => {
        console.log(data);
        this.salesform.reset();
      },
        error => {
        console.log(error);
      })
    
  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

  ngOnInit() {
    // Sales form model
    this.salesform = this.fbservice.group({
      clientsname: ['', [Validators.required]],
      productname: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      transactioncode: ['']
    });

    // Fetching available stock names
    this.stockservice.getallstock()
      .subscribe(data => {
        this.allstocks= data.stocks; 
        console.log(this.allstocks);
      },
        error => {
        console.log(error);
      })

  }

  // Changing product
  changeproduct(event: any) {
    this.itemname?.setValue(event.target.value, {
      onlySelf: true,
    });
  } 

  // GETTER FUNCTIONS

  // clientsname
  get clientname() {
    return this.salesform.get('clientsname');
  }

  // Items name
  get itemname() {
    return this.salesform.get('productname');
  }

  // Quantity
  get quantity() {
    return this.salesform.get('quantity');
  }

//  Payment
  get payment() {
    return this.salesform.get('payment');
  }

  // Code 
  get code() {
    return this.salesform.get('code');
  }

}
