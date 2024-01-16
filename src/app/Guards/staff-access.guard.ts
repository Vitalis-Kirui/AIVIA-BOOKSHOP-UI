import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActiveStaffService } from '../Services/active-staff.service';

@Injectable({
  providedIn: 'root',
})
export class StaffGuard implements CanActivate {
  constructor(private router: Router, private service: ActiveStaffService) {}

  canActivate(): any {
    const allowedValue = '31676180';

    // Retrieve the active staff item from local storage
    const userValue = this.service.activestaff_number();

    if (userValue === allowedValue) {
      return true;
    } else {
      // Redirect to an "Access Denied" page or any other appropriate action
      this.router.navigate(['/menu']);
      return false;
    }
  }
}
