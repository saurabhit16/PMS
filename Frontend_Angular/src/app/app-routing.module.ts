import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './student/profile/profile.component';
import{ AboutusComponent } from './aboutus/aboutus.component'
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent} from './feedback/feedback.component';
import { AuthGuard } from './_helpers';
import { RegisterComponent } from './register';




const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'student/profile', component: ProfileComponent },
  { path: 'aboutus', component:AboutusComponent},
  { path: 'feedback', component:FeedbackComponent},
  { path: 'contactus', component:ContactusComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
