import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-sales-full',
  templateUrl: './sales-full.component.html',
  styleUrls: ['./sales-full.component.css']
})
export class SalesFullComponent implements OnInit {

  // Sales array
  sales : any = [];
  totalstocksold:any;
  totalsoldworth:any;
  totalsoldearnings:any;

  constructor(private router : Router, private salesservice : SaleService) { }

    // Back to reports function
  backtoreports() {
    this.router.navigate(['reports']);
  }
  ngOnInit() {

    // All sales
    this.salesservice.getallsales()
      .subscribe(data => {
        this.sales = data.sales;
        console.log("Sales: ",data);

        this.totalstocksold = data.stocksold;
        this.totalsoldworth = data.stocksoldworth;
        this.totalsoldearnings = data.totalearnings;
      },
        error => {
          console.log(error);
        }
      )

  }

}
