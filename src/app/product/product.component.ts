import { Component, OnInit,Input } from '@angular/core';
import { ProductType } from '../type';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data!:ProductType;
  constructor() { }
  ngOnInit(): void {
  }

}
