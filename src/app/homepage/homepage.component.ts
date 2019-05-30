import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private service: CommonService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  loginForm: FormGroup;

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      user: [''],
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  login() {

    console.log(this.loginForm.value);

    if (this.loginForm.value.user === 'admin') {
      
      //login function for admin

      this.router.navigate(['admin']);

    }

    if (this.loginForm.value.user === 'student'){
      
      //login function for student

      this.router.navigate(['student']);

    }
  }

}
