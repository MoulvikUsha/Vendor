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

  public itemData :any = [
    // {
    //       itemName : "Titan",
    //       cost : 3000,
    //       info : "One of the finest watches",
    //       image : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     },
    //     {
    //       itemName : "Tissot",
    //       cost : 10000,
    //       info : "One of the finest watches",
    //       image : "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //     }
  ];
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public totalCartItem: number = 0;

  constructor(private service: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getItemData();
  }

  getItemData() {
    this.service.getItem().subscribe((res: any) => {
      this.itemData.push(res.response);
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item).subscribe(res => {
      this.cartItemList.push(res);
      this.totalCartItem = res.response.length
    })
  }

}
