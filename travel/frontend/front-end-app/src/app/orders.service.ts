import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl:string="http://localhost:9090/orders";

  constructor(public http:HttpClient) { }

  createOrder(orders:any):Observable<string>{
      return this.http.post(this.baseUrl+"/place",orders,{responseType:'text'})
  }

}
