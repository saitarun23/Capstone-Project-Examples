import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",redirectTo:"",pathMatch:"full"},
  {path:"admin",component:AdmindashboardComponent},
  {path:"customer",component:CustomerdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
