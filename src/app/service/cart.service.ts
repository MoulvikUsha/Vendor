import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productList = new BehaviorSubject<any>([]);
  public totalCartItem: number = 0;

  constructor(private http: HttpClient, private route: Router) { }


  getFromCart() {
    return this.http.get<{
      error: boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/cart/getFromCart`);
  }

  addToCart(product: any) {
    return this.http.post<{
      error: boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/cart/addToCart`, product);
  }

  removeCartItem(id: string) {
    return this.http.delete<{
      error: boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/cart/deleteFromCart/${id}`);
  }

  removeAllCart() {
    return this.http.delete<{
      error: boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/cart/deleteAllCart`);
  }
}
