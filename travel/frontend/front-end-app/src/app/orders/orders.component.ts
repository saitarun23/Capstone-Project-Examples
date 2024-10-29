import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  cart: any[] = [];
  totalAmount: number = 0;
  orders: Orders;
  message: string = '';

  constructor(public router: Router, public os:OrdersService) {
    // Retrieve the cart and totalAmount from navigation state
    let navigation = this.router.getCurrentNavigation();
    

    if (navigation?.extras?.state) {
      this.cart = navigation.extras.state['cart'];
      this.totalAmount = navigation.extras.state['totalAmount'];
    }

    // Initialize the order
    this.orders = new Orders(0, this.totalAmount, 'customer@example.com', new Date(), 'pending'); // Modify email accordingly
  }

  ngOnInit(): void {}

  placeOrder(): void {
    // Call service to place order
    this.os.createOrder(this.orders).subscribe({
      next: (result: any) => {
        this.message = 'Order placed successfully!';
        console.log(result);
        // Navigate to OrderItem component or a confirmation page
        this.router.navigate(['/orderitem'], { state: { order: this.orders, cart: this.cart } });
      },
      error: (error: any) => {
        console.error('Error placing order:', error);
        this.message = 'Failed to place the order. Please try again later.';
      }
    });
  }
}
