import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CyberComponent } from './Components/cyber/cyber.component';
import { SalesComponent } from './Components/sales/sales.component';
import { AddingComponent } from './Components/adding/adding.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import { StaffsComponent } from './Components/staffs/staffs.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { VerificationComponent } from './Components/verification/verification.component';
import { Error404Component } from './Components/error404/error404.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CyberFullComponent } from './Components/cyber-full/cyber-full.component';
import { ExpensesFullComponent } from './Components/expenses-full/expenses-full.component';
import { SalesFullComponent } from './Components/sales-full/sales-full.component';
import { StaffDetailsComponent } from './Components/staff-details/staff-details.component';
import { StockDetailsComponent } from './Components/stock-details/stock-details.component';
import { UpdateStaffComponent } from './Components/update-staff/update-staff.component';
import { UpdateStockComponent } from './Components/update-stock/update-stock.component';
import { SearchComponent } from './Components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CyberComponent,
    SalesComponent,
    AddingComponent,
    ExpensesComponent,
    StaffsComponent,
    ReportsComponent,
    VerificationComponent,
    Error404Component,
    MenuComponent,
    CyberFullComponent,
    ExpensesFullComponent,
    SalesFullComponent,
    StaffDetailsComponent,
    StockDetailsComponent,
    UpdateStaffComponent,
    UpdateStockComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
