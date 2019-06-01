
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'



export interface PeriodicElement {
  studentId: number;
  fullName: string;
  course: string;
  email: string;
  mobile: number;
  status: string;
  edit: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { studentId: 1, fullName: 'SAURABH', course: 'dac', email: "s", mobile: 2, status: 'placed', edit: 'EDIT' },
  { studentId: 2, fullName: 'ABHISHEK', course: 'dac', email: "A", mobile: 2, status: 'placed', edit: 'EDIT' },
  { studentId: 3, fullName: 'SHAKTI', course: 'dac', email: "sH", mobile: 8, status: 'placed', edit: 'EDIT' },
  { studentId: 4, fullName: 'ANKIT', course: 'dac', email: "AN", mobile: 8, status: 'placed', edit: 'EDIT' },
  { studentId: 6, fullName: 'AYUSH', course: 'dac', email: "BH", mobile: 6, status: 'placed', edit: 'EDIT' },
];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {

  constructor(
    public pop: MatDialog) { }


  displayedColumns: string[] = ['studentId', 'fullName', 'course', 'email', 'mobile', 'status', 'edit'];
  dataSource = ELEMENT_DATA;




  editStudent() {
    console.log("edit is working");
    const popupreference = this.pop.open(AdminPopComponent);
  };

  updateStudent() {
    console.log('hey');
  }

  removeStudent() {
    console.log("delete is working");
    this.pop.open(AdminDeletePopComponent);
  }
}


// -----------------------------------------------------------------------------------------

@Component({
  selector: 'app-amdin',
  templateUrl: 'updatestudentpop.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminPopComponent implements OnInit {
  

  editForm: FormGroup;

  
  constructor(
    public popupreference: MatDialogRef<AdminPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    private formbuilder: FormBuilder) { }



    ngOnInit() {
      this.editForm = this.formbuilder.group({
        studentId: ['', Validators.required],
        fullName: ['', Validators.required],
        course: ['', Validators.required],
        status: ['', Validators.required]
      })
    }


  updateStudent() {
    console.log('event');
    console.log(this.editForm.value);
  }
  cancel() {
    this.popupreference.close();
  }
}


@Component({
  selector: 'app-amdin',
  templateUrl: 'deletestudentpop.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminDeletePopComponent {

  constructor(public deletepop: MatDialogRef<AdminDeletePopComponent>) { }


  closed() {
    this.deletepop.close();
  }

}

