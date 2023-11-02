import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

   // Form variable
  staffupdateform!: UntypedFormGroup;

  // Work stations
  stations: any = ['All', 'Chebunyo', 'Kaboson']

  // Gender
  genders: any = ['Male', 'Female']

  // Roles
  roles: any = ['CEO', 'Management', 'Supervisor', 'Attendant']

  // Staff object
  existingdata: any = {};

  constructor(private fbservice: UntypedFormBuilder, private staffservice: StaffService, private route: ActivatedRoute, private router:Router) { }


  ngOnInit() {

    // Form model
    this.staffupdateform = this.fbservice.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      secondname: ['', [Validators.required, Validators.minLength(3)]],
      nationalid: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.minLength(9)]],
      age: ['', [Validators.required]],
      image: [''],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      workstation: ['', [Validators.required]],
      monthlysalary: ['', [Validators.required]]
    })

    // Fetching existing data
    // Staff id
    let staffid = this.route.snapshot.paramMap.get('id');
    
    this.staffservice.getsinglestaff(staffid)
      .subscribe(data => {
        
        this.existingdata = data.staffdata;

        // Patching values to the form
        this.staffupdateform.patchValue({
          firstname: this.existingdata[0].firstname,
          secondname: this.existingdata[0].secondname,
          nationalid: this.existingdata[0].nationalid,
          phonenumber: this.existingdata[0].phonenumber,
          age: this.existingdata[0].age,
          image:this.existingdata[0].image,
          role: this.existingdata[0].role,
          gender: this.existingdata[0].gender,
          workstation: this.existingdata[0].workstation,
          monthlysalary: this.existingdata[0].monthlysalary
        })

        console.log(this.existingdata);

      },
        error => {
        console.log(error);
      })

  }

  // Update staff function
  updatestaff() {

    let id  = this.route.snapshot.paramMap.get('id');

    let newdata = this.staffupdateform.value;

    this.staffservice.updatestaff(id, newdata)
        .subscribe(data =>{
          console.log(data);

          // Redirect
          this.router.navigate(['staffs']);	
        },
        error =>{
          console.log(error);
        })
    
  }

  // GETTER FUNCTIONS

  // Firstname
  get firstname() {
    return this.staffupdateform.get('firstname');
  }

  // Second name
  get secondname() {
    return this.staffupdateform.get('secondname');
  }

  // id
  get id() {
    return this.staffupdateform.get('nationalid');
  }

  // Phone number
  get phonenumber() {
    return this.staffupdateform.get('phonenumber');
  }

  // age
  get age() {
    return this.staffupdateform.get('age');
  }

  // role
  get role() {
    return this.staffupdateform.get('role');
  }

  // gender
  get gender() {
    return this.staffupdateform.get('gender');
  }

  // Workstation
  get workstation() {
    return this.staffupdateform.get('workstation');
  }

  // Salary
  get salary() {
    return this.staffupdateform.get('monthlysalary');
  }

  // Tracking changes in the dropdowns

  // Role
  changerank(event: any) {
    this.role?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  // Gender
  changegender(event: any) {
    this.gender?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  // Station
  changestation(event: any) {
    this.workstation?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  // Go back function
  goback(){
    this.router.navigate(['adding']);
  }
}