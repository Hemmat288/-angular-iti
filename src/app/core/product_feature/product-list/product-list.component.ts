import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 

 
import { productServices } from './../../../_sevices/product/product.services';
import { product } from 'src/app/_models/product/product.model';
 
 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  productArray: product[]; 
    constructor(private productservices: productServices) {
    this.productArray = this.productservices.getAllProduct(); 
   }
 
  


  ngOnInit(): void {
  }

}