import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  
  homeMenu() {
    this.router.navigate(['']);
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
