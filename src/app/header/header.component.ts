import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalCartItem: number = 0;
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  add: boolean = true;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getFromCart().subscribe(res => {
      this.totalCartItem = res.response.length
    })

    if (sessionStorage.getItem('admin')) {
      this.add = true
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  addProduct() {
    if (sessionStorage.getItem('admin')) {
      this.router.navigate(['/addItem']);
    }
  }

}
