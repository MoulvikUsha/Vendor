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


  getFromCart() {
    return this.http.get<{
      error: boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/cart/getFromCart`);
  }

  addToCart(product: any) {
    this.getTotalPrice();
    return this.http.post<{
      error: boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/cart/addToCart`, product);
  }

  getTotalPrice(): number {
    let total = 0;
    this.cartItemList.map((a: any) => {
      total += a.cost
    })
    return total
  }

  removeCartItem(id: string) {
    return this.http.delete<{
      error: boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/cart/deleteFromCart/${id}`);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
  }
}
