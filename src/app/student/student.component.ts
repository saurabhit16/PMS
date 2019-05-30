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
    public pop:MatDialog) { }

  registrationForm: FormGroup;

  ngOnInit() {
    this.registrationForm = this.formbuilder.group({
      studentId: [''],
      fullName: ['', Validators.required],
      address: [''],
      batch: ['', Validators.required],
      course: ['', Validators.required],
      sscMarks: ['', Validators.required],
      slccMarks: ['', Validators.required],
      graduationMarks: ['', Validators.required],
      postGraduationMarks: ['', Validators.required],
    })
  }
  registerStudent() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
       
       //this.router.navigate(['student/profile']);
       this.registrationForm.disabled;
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