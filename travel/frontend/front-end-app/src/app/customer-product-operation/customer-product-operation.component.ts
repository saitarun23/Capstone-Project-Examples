import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-product-operation',
  templateUrl: './customer-product-operation.component.html',
  styleUrls: ['./customer-product-operation.component.css']
})
export class CustomerProductOperationComponent implements OnInit{
  cart:Array<any>=[];
  products:Array<Product>=[];
  flag:boolean = true;
  msg:string ="";
  constructor(public ps:ProductService,public router:Router){}   // DI for ProductService
  ngOnInit(): void {
      this.loadProductInfo();
  }
  loadProductInfo(): void {
    this.ps.findAll().subscribe({
      next:(result:any)=> {
        this.products=result;
      },
      error:(error:any)=> {
          console.log(error)
      },
      complete:()=> {
        console.log("product loaded...")
      }
    })   
  }
  logout(): void {
    this.router.navigate(["login"])
  }
  storeInCart(product:any):void {
    //console.log(product)
    let result = this.cart.find(c=>c.pid==product.pid);
    if(result==undefined){
      product.qty=1;
      this.cart.push(product)
      console.log("Item added in cart")
    }else {
      console.log("Item already present in cart")
    }
    
  }
  viewCart(): void {
    this.flag=false;
  }

  increment(index:any): void {
    this.cart[index].qty=this.cart[index].qty+1
  }
  decrement(index:any): void {
    this.cart[index].qty=this.cart[index].qty-1
  }
  remove(index:any):void {
    this.cart.splice(index,1)
  }
}