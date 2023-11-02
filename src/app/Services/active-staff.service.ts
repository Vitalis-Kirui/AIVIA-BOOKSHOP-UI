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

}
