import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { productModel } from '../model/productModel';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addProductForm: FormGroup;
  itemObj: productModel = new productModel();


  constructor(private fb: FormBuilder, private router: Router, private service: ApiService) {
    this.addProductForm = this.fb.group({
      itemName: ['', Validators.required],
      image: ['', Validators.required],
      info: ['', Validators.required],
      cost: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.itemObj.itemName = this.addProductForm.value.itemName;
    this.itemObj.image = this.addProductForm.value.image;
    this.itemObj.info = this.addProductForm.value.info;
    this.itemObj.cost = this.addProductForm.value.cost;

    this.service.addItem(this.itemObj).subscribe(res => {
      console.log(res);
      alert('Item added successfully')
      this.addProductForm.reset();
      setTimeout(() => {
        this.router.navigate(['/catalogue'])
      }, 1000);
    })
  }

}
