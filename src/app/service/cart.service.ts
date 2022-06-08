import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient, private route: Router) { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  addToCart(product: any) {
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    this.getTotalPrice();
    return this.http.post<{
      error: Boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/products/addItem`, product);
  }


  getTotalPrice(): number {
    let total = 0;
    this.cartItemList.map((a: any) => {
      total += a.cost
    })
    return total
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, i: any) => {
      if (product.itemName === a.itemName) {
        this.cartItemList.splice(i, 1)
      }
    })
    this.productList.next(this.cartItemList)
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
  }
}
