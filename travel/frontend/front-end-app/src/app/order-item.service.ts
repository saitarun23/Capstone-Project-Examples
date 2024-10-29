import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  baseUrl:string="http://localhost:9090/orderitem"
  constructor(public http:HttpClient) { }

  createOrderItem(orderItem:any):Observable<string>{
    return this.http.post(this.baseUrl+"/store",orderItem,{responseType:'text'})
  }
}
