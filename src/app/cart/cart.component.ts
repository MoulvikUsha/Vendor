import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public total !: number;
  public totalCartItem: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;

      this.total = this.cartService.getTotalPrice()
    })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.cartService.getProducts().subscribe(res => {
      this.totalCartItem = res.length
    })
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }
}
