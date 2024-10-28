import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-operation',
  templateUrl: './admin-product-operation.component.html',
  styleUrls: ['./admin-product-operation.component.css']
})
export class AdminProductOperationComponent implements OnInit{
productRef = new FormGroup({
  pid:new FormControl(),
  pname:new FormControl(),
  price:new FormControl(),
  description:new FormControl(),
  stock:new FormControl(),
  imageurl:new FormControl()
})
  products:Array<Product>=[];
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
  storeProduct():void {
    let product = this.productRef.value;
    this.ps.storeProduct(product).subscribe({
      next:(result:any)=> {
          this.msg=result;
      },
      error:(error:any)=> {
        console.log(error)
      },
      complete:()=> {
        console.log("Record stored")
        this.loadProductInfo();
      }

    })
    this.productRef.reset();
  }
  
  logout(): void {
    this.router.navigate(["login"])
  }
}