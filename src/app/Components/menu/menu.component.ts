import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  // Register sales
  registersales() {
    this.router.navigate(['sales']);
  }
  
  // Cyber services
  cyberservices() {
    this.router.navigate(['cyber']);
  }

  //  stock
  stock() {
    this.router.navigate(['adding']);
  }

  // Registering expenses
  registerexpenses() {
    this.router.navigate(['expenses']);
  }

  // Staffs
  staffs() {
    this.router.navigate(['staffs']);
  }

  // See reports
  seereports() {
    this.router.navigate(['reports']);
  }

  // Search
  search() {
    this.router.navigate(['search']);
  }

// Sign out staff
signoutstaff(){
  localStorage.removeItem('active staff');
  window.location.reload();
}

  ngOnInit(): void {
  }

}
