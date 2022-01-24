import { Component, Input, OnInit } from '@angular/core';
import { product, productWithCounter } from 'src/app/_models/product/product.model';
import { productServices } from './../../_sevices/product/product.services';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  listAdd : productWithCounter[]=[];

    delproduct! : product;
  dropdownopended = false;
    
 
  constructor(private productservices: productServices) { 

  }


  ngOnInit(): void {
    this.productservices.cardHasBeenChanged.subscribe(
      (res) => {
        this.listAdd=res
       },
      (err) => { },
      ( ) => { },
    );
  }
    deleted() {
 
      console.log('nav')
       
}
}
