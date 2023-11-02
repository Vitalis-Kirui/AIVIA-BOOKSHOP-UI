import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from 'src/app/Services/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  // Stock update form
  stockupdateform!: UntypedFormGroup;

  // Existing stock data
  existingstock: any = {};

  constructor(private fbservice:UntypedFormBuilder, private stockservice:StockService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    // Form model
    this.stockupdateform = this.fbservice.group({
      productname: ['', [Validators.required]],
      description: [''],
      quantity: [, [Validators.required]],
      buyingprice: [, [Validators.required]],
      sellingprice: [, [Validators.required]]
    })

    // Fetching existing stock information

    let id = this.route.snapshot.paramMap.get('id');

    this.stockservice.getsinglestock(id)
      .subscribe(data => { 

        this.existingstock = data.stockdata;
        console.log(this.existingstock);

          // Patching values to update form
        this.stockupdateform.patchValue({
          productname: this.existingstock[0].productname,
          description: this.existingstock[0].description,
          quantity: this.existingstock[0].quantity,
          buyingprice: this.existingstock[0].buyingprice,
          sellingprice:this.existingstock[0].sellingprice
        })

      },
        error => {
        console.log(error);
        })

  }

  // update function
  updatestock() {

    let id = this.route.snapshot.paramMap.get('id');

    const updatedata = this.stockupdateform.value;

    this.stockservice.updatestock(id, updatedata)
        .subscribe(data => {

          console.log(data);
          this.router.navigate(['adding']);

        },
        error =>{
          console.log(error);
        });
    
  }


  // Getter functions

  // Name
  get name() {
      return this.stockupdateform.get('productname');
    }

  // Quantity
  get quantity() {
      return this.stockupdateform.get('quantity');
    }

  // Buying price 
  get buyingprice() {
      return this.stockupdateform.get('buyingprice');
    }

  // Selling price
  get sellingprice() {
      return this.stockupdateform.get('sellingprice');
    }

    // Go back function
    goback(){
      this.router.navigate(['adding']);
    }

  }
