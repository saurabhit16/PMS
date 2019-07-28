import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService } from '../_services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  success: string;
 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
    
  ) { 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
      if(this.loginForm.value.username ==='admin')
      this.router.navigate(['admin']);
      else
      this.router.navigate(['student']);
  }

  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  // show success message on registration
  if (this.route.snapshot.queryParams['registered']) {
    this.success = 'Registration successful';
}

  }

  

  ngOnInit() {
    window.localStorage.removeItem('token');

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });

    
  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   onSubmit() {

    //alert(this.loginForm.value.username);
    //alert(this.returnUrl.concat('admin'));
    //console.log(this.loginForm.value);

    
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();
        

      // reset alerts on submit
      this.error = null;
      this.success = null;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        
        this.loading = true;

        this.authenticationService.login(this.f.username.value,this.f.userId.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                //alert(JSON.stringify(data));
                this.router.navigate([this.returnUrl.concat(this.loginForm.value.username)]);
                  },
            error => {
              alert("Invalid userId or Password");
                //this.error = "Invalid userId or Password";
                this.loading = false;
            });
}
   



  home() {
    this.router.navigate(['homepage']);
  }
  aboutUs() {
    this.router.navigate(['aboutus']);
  }

  contactUs() {
    this.router.navigate(['contactus']);
  }

  feedBack(){
    this.router.navigate(['feedback']);
  }
}


