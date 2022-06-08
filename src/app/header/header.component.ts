import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalCartItem: number = 0;
  public cartItemList: any = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.totalCartItem = res.length
    })
  }


  addToCart(item: any) {
    this.cartService.addToCart(item).subscribe(res => {
    this.cartItemList
    });
  }
}
