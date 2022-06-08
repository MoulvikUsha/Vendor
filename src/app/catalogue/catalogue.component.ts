import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public itemData :any = [];
  public cartItemList: any = [];
  public totalCartItem: number = 0;

  constructor(private service: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getItemData();
  }

  getItemData() {
    this.service.getItem().subscribe((res: any) => {
      this.itemData.push(res.response);
      this.totalCartItem = res.response.length
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item).subscribe(res => {
      this.totalCartItem = res.response.length
      this.cartItemList.push(res);
    })
  }

}
