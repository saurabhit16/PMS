import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent,AdminPopComponent, AdminDeletePopComponent} from './admin/admin.component';
import { StudentComponent, ConfirmartionPop } from './student/student.component';
import { NavComponent } from './student/nav/nav.component';
import { ProfileComponent } from './student/profile/profile.component';

// Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';



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
    AdminDeletePopComponent
    
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
