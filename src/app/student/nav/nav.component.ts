import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  returnUrl: string;
  
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

  ngOnInit() {
  }

  logout(){

    this.authenticationService.logout();
    this.router.navigate([this.returnUrl]);
  }
  
}
