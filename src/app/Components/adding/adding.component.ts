import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/Services/stock.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  // Adding form variable
  stockadditionform!: UntypedFormGroup;

  // Stock array
  allstocks: any = [];

  // Grand Totals
  totalbuyingprices!: any;
  totalsellingprices!: any;

  // Display variables
  addingstock: boolean = false;
  seeingstock: boolean = true;

  constructor(private fbservice: UntypedFormBuilder, private router: Router, private stockservice:StockService) { }
  
  // Add stock display function
  addstock() {
    this.addingstock = true;    
    this.seeingstock = false;
  }

  // See stock display function
  seestock() {
    this.addingstock = false;
    this.seeingstock = true;
  }

  ngOnInit() {

    // Form model
    this.stockadditionform = this.fbservice.group({
      productname: ['', [Validators.required]],
      description: [''],
      quantity: [1, [Validators.required]],
      buyingprice: [1, [Validators.required]],
      sellingprice: [1, [Validators.required]]
    })

    // Fetching existing stock
    this.stockservice.getallstock()
      .subscribe(data => {
        this.allstocks = data.stocks;
        this.totalbuyingprices = data.totalbuyingprice;
        this.totalsellingprices = data.totalsellingprice
        console.log(data);
      },
        error => {
          console.log(error);
        })
  }

  // Getter functions

  // Name
  get name() {
    return this.stockadditionform.get('productname');
  }

  // Quantity
  get quantity() {
    return this.stockadditionform.get('quantity');
  }

  // Buying price 
  get buyingprice() {
    return this.stockadditionform.get('buyingprice');
  }

  // Selling price
  get sellingprice() {
    return this.stockadditionform.get('sellingprice');
  }

  // Add Item function
  additem() {

    console.log(this.stockadditionform.value)

    // Posting new stock database
    this.stockservice.addnewstock(this.stockadditionform.value)
      .subscribe(data => {
        console.log(data);
        this.stockadditionform.reset();
        window.location.reload();
      },
        error => {
          console.log(error);
      })

  }

  // Open a single stock
  openstock(id: any) {
    this.router.navigate(['adding/stocks/stock/', id])
  }

  // Go back function
  goback() {

    this.router.navigate(['menu']);
    
  }

}
