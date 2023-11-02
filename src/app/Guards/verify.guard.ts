import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActiveStaffService } from '../Services/active-staff.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {
  
  constructor(private router: Router, private service: ActiveStaffService) { }

  canActivate(): any {
  
    if (this.service.activestaff()) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  
  }
}
