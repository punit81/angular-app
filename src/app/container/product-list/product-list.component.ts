import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  day:number=9;
  plist:ProductType[]=[{
    productId:1000,
    productName:"Japani Joota",
    productImage:"/assets/shoe1.jpg",
    productPrice:1200,
    productStock:20
  },
  {
    productId:1001,
    productName:"Chini Joota",
    productImage:"/assets/shoe2.jpg",
    productPrice:100,
    productStock:90
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
