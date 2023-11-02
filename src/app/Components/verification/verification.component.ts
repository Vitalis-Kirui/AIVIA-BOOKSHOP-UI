import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  // Success verification
  staffverified: any;

  // False verification
  wrongverification: boolean = false;

  // Form variable
  verificationform!: UntypedFormGroup;

  constructor(
    private router: Router,
    private fbservice: UntypedFormBuilder,
    private staffservice: StaffService
  ) {}

  ngOnInit() {
    this.verificationform = this.fbservice.group({
      staffnumber: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  // Verify function
  verifystaffnumber() {
    console.log(this.verificationform.value);

    // Checking staff existence

    const nationalid = this.verificationform.get('staffnumber')?.value;
    this.staffservice.startsession(nationalid).subscribe(
      (data) => {
        console.log(data);

        if (data.staff[0] == null) {
          this.wrongverification = true;
        } else {
          this.staffverified = data.staff[0].nationalid;

          localStorage.setItem('active staff', this.staffverified);

          this.router.navigate(['menu']);
        }
      },
      (error) => {
        // Getting error response
        if (error instanceof HttpErrorResponse) {
          if (error.status === 404) {
            console.log('User not found');
          } else {
            console.log(error);
            this.wrongverification = true;
          }
        }
      }
    );
  }

  // Getter function
  get staffnumber() {
    return this.verificationform.get('staffnumber');
  }
}
