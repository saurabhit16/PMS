import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CommonService } from '../common.service'
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(
    private service: CommonService,
    private router: Router,
    private formbuilder: FormBuilder,
    public pop: MatDialog) { }

  registrationForm: FormGroup;

  ngOnInit() {
    this.registrationForm = this.formbuilder.group({
      studentId: ['12'],
      fullName: ['2', Validators.required],
      address: ['2'],
      batch: ['2', Validators.required],
      course: ['2', Validators.required],
      sscMarks: ['2', Validators.required],
      slccMarks: ['2', Validators.required],
      graduationMarks: ['2', Validators.required],
      postGraduationMarks: ['2', Validators.required],
    })
  }
  registerStudent() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {

      this.router.navigate(['student/profile']);
      // this.registrationForm.controls['fullName'].disable();    

      console.log(Object.keys(this.registrationForm.controls));


      Object.keys(this.registrationForm.controls)
        .forEach((controlName) => {// controlName is array index value
          this.registrationForm.controls[controlName].disable();
        });

      this.pop.open(ConfirmartionPop);

    }
  }
}


@Component({
  selector: 'app-confirmationpopup',
  templateUrl: './confirmationpopup.html',
  styleUrls: ['./student.component.scss']
})
export class ConfirmartionPop {

  constructor(public popupreference: MatDialogRef<ConfirmartionPop>) { }

  cancel() {
    this.popupreference.close();
  }

}