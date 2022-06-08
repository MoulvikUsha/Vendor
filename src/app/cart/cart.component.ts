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
    this.cartService.getFromCart().subscribe(res => {
      this.products = res.response;
      console.log(res);
    })
  }

  removeItem(id: string) {
    this.cartService.removeCartItem(id).subscribe(res => {
      this.totalCartItem = res.response.length
    })
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }
}
