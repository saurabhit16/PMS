import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent} from './homepage/homepage.component';
import { AdminComponent,AdminPopComponent, AdminDeletePopComponent} from './admin/admin.component';
import { StudentComponent, ConfirmartionPop } from './student/student.component';
import { NavComponent } from './student/nav/nav.component';
import { ProfileComponent } from './student/profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomemenuComponent } from './homemenu/homemenu.component';


// Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule,MatDividerModule, MatGridListModule, MatIconModule} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent,
    StudentComponent,
    NavComponent,
    ProfileComponent,
    ConfirmartionPop,
    AdminnavComponent,
    AdminPopComponent,
    AdminDeletePopComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    FeedbackComponent,
    HomemenuComponent
    
  ],
  entryComponents: [ConfirmartionPop,AdminPopComponent,AdminDeletePopComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    AngularFontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
