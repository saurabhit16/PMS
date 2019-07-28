import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.scss']
})
export class AdminnavComponent implements OnInit {

  returnUrl: string;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

  ngOnInit() {
  }

logout(){

  this.authenticationService.logout();
  this.router.navigate([this.returnUrl]);
}

}
