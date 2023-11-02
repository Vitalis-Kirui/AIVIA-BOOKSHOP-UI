import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingComponent } from './Components/adding/adding.component';
import { CyberFullComponent } from './Components/cyber-full/cyber-full.component';
import { CyberComponent } from './Components/cyber/cyber.component';
import { Error404Component } from './Components/error404/error404.component';
import { ExpensesFullComponent } from './Components/expenses-full/expenses-full.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SalesFullComponent } from './Components/sales-full/sales-full.component';
import { SalesComponent } from './Components/sales/sales.component';
import { SearchComponent } from './Components/search/search.component';
import { StaffDetailsComponent } from './Components/staff-details/staff-details.component';
import { StaffsComponent } from './Components/staffs/staffs.component';
import { StockDetailsComponent } from './Components/stock-details/stock-details.component';
import { UpdateStaffComponent } from './Components/update-staff/update-staff.component';
import { UpdateStockComponent } from './Components/update-stock/update-stock.component';
import { VerificationComponent } from './Components/verification/verification.component';
import { VerifyGuard } from './Guards/verify.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'verify', component: VerificationComponent },
  { path: 'adding', component: AddingComponent, canActivate:[VerifyGuard] },
  { path: 'cyber', component: CyberComponent, canActivate:[VerifyGuard] },
  { path: 'expenses', component: ExpensesComponent, canActivate:[VerifyGuard] },
  { path: 'reports', component: ReportsComponent, canActivate:[VerifyGuard] },
  { path: 'sales', component: SalesComponent, canActivate:[VerifyGuard] },
  { path: 'staffs', component: StaffsComponent, canActivate:[VerifyGuard] },
  { path: 'menu', component: MenuComponent, canActivate:[VerifyGuard] },
  { path: 'search', component: SearchComponent, canActivate:[VerifyGuard] },
  { path: 'sales/full-report', component: SalesFullComponent, canActivate:[VerifyGuard] },
  {path: 'expenses/full-report', component: ExpensesFullComponent, canActivate:[VerifyGuard]},
  {path: 'cyber/full-report', component: CyberFullComponent, canActivate:[VerifyGuard]},
  { path: 'staffs/staff/:id', component: StaffDetailsComponent, canActivate:[VerifyGuard] },
  { path: 'adding/stocks/stock/:id', component: StockDetailsComponent , canActivate:[VerifyGuard]},
  { path: 'adding/stocks/update-stock/:id', component: UpdateStockComponent, canActivate:[VerifyGuard] },
  { path: 'staffs/update-staff/:id', component: UpdateStaffComponent, canActivate:[VerifyGuard] },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
