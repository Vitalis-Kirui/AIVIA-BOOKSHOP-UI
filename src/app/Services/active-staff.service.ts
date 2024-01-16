import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveStaffService {

  constructor() { }

  // Checking an active staff member
  activestaff() {
    return !!localStorage.getItem('active staff');
  }

  // Getting the active staff number
  activestaff_number() {
    return localStorage.getItem('active staff');
  }

}
