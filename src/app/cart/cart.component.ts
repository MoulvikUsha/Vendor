import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public totalCartItem: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart()
  }

  removeItem(id: string) {
    this.cartService.removeCartItem(id).subscribe(res => {
      this.getCart()
    })
  }


  getCart() {
    this.cartService.getFromCart().subscribe(res => {
      this.products = res.response;
      this.totalCartItem = res.response.length
      console.log(this.totalCartItem);
    })
  }

  emptyCart() {
    this.cartService.removeAllCart().subscribe(res => {
      this.getCart()
    })
  }
}
