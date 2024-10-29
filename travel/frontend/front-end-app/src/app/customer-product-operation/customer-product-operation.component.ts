import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-product-operation',
  templateUrl: './customer-product-operation.component.html',
  styleUrls: ['./customer-product-operation.component.css']
})
export class CustomerProductOperationComponent implements OnInit {
  cart: Array<any> = [];
  products: Array<Product> = [];
  flag: boolean = true;
  msg: string = "";
  totalAmount: number = 0;

  constructor(public ps: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.loadProductInfo();
  }

  loadProductInfo(): void {
    this.ps.findAll().subscribe({
      next: (result: any) => {
        this.products = result;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log("Product loaded...");
      }
    });
  }

  logout(): void {
    this.router.navigate(["login"]);
  }

  storeInCart(product: any): void {
    let result = this.cart.find(c => c.pid === product.pid);
    if (result === undefined) {
      product.qty = 1;
      product.total = product.price; // Initialize total price for this product
      this.cart.push(product);
      this.updateTotalAmount();
      console.log("Item added to cart");
    } else {
      console.log("Item already present in cart");
    }
  }

  viewCart(): void {
    this.flag = false;
  }

  increment(index: any): void {
    this.cart[index].qty += 1;
    this.cart[index].total = this.cart[index].price * this.cart[index].qty; // Update total for this product
    this.updateTotalAmount();
  }

  decrement(index: any): void {
    if (this.cart[index].qty > 1) {
      this.cart[index].qty -= 1;
      this.cart[index].total = this.cart[index].price * this.cart[index].qty; // Update total for this product
      this.updateTotalAmount();
    }
  }

  remove(index: any): void {
    this.cart.splice(index, 1);
    this.updateTotalAmount();
  }

  updateTotalAmount(): void {
    this.totalAmount = this.cart.reduce((sum, item) => sum + item.total, 0);
  }

  submitOrder(): void {
    this.router.navigate(['/orders'], { state: { cart: this.cart, totalAmount: this.totalAmount } });
  }
}
