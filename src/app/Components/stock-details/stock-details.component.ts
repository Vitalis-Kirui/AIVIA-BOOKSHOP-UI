import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from 'src/app/Services/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  // Stock details
  stockdetails: any = {};

  constructor(private route: ActivatedRoute, private router:Router, private stockservice:StockService) { }

  ngOnInit() {

    // ID
    let id = this.route.snapshot.paramMap.get('id')

    this.stockservice.getsinglestock(id)
      .subscribe((data) => {
        this.stockdetails = data.stockdata;
        console.log(this.stockdetails)
      },
        error => {
        console.log(error)
      })

  }

  // Updating stock
  updatestock(id: any) {
    this.router.navigate(['adding/stocks/update-stock',id]);
  }

  // Deleting stock
  deletestock(id: any) {

    let stockid = this.route.snapshot.paramMap.get('id');

    this.stockservice.deletestock(stockid)
      .subscribe((success) => {
        console.log("The stock was deleted successfuly")

        // Redirect
        this.router.navigate(['adding'])
        
      },
        error => {
          console.log("Error deleting stock", error)
        }
      )
    
  }

  // Back to stock functions
  backtostocks() {
    this.router.navigate(['adding'])
  }

}
