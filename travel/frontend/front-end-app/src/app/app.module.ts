import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminProductOperationComponent } from './admin-product-operation/admin-product-operation.component';
import { CustomerProductOperationComponent } from './customer-product-operation/customer-product-operation.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderItemComponent } from './order-item/order-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    AdminProductOperationComponent,
    CustomerProductOperationComponent,
    OrdersComponent,
    OrderItemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
