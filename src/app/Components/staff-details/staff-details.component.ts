import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  // Staff data object
  staffdetails: any = {};

  constructor(private staffservice:StaffService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    this.staffservice.getsinglestaff(id)
      .subscribe(data => {
        this.staffdetails = data.staffdata;
        console.log(this.staffdetails)
      },
        error => {
          console.log(error);
      })

  }

  // Update staff details
  updatestaff(id: any) {
    this.router.navigate(['staffs/update-staff',id]);
  }

  // Deleting staff
  deletestaff(id: any) {

    let staffid = this.route.snapshot.paramMap.get('id');

    this.staffservice.deletestaff(staffid)
      .subscribe((success) => {
        console.log(success)
        
        // Redirecting after deleting
        this.router.navigate(['staffs']);
      },
        error => {
          console.log(error);
      })
    
  }

  // Go back function
  backtostaffs() {
    this.router.navigate(['staffs'])
  }

}
