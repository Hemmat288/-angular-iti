import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/_models/product/product.model';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: product;
  constructor() { }

  ngOnInit(): void {

  }
    calculatePrice():Number{
      let result;
      if (this.productItem.dicount) {
        result = this.productItem.price - this.productItem.dicount;
      } else {
        result = this.productItem.price;
      }
      return result;
    }
}
