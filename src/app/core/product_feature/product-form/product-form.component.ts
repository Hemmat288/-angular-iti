import { Component, OnInit } from '@angular/core';
import { productServices } from 'src/app/_sevices/product/product.services';
import { product } from './../../../_models/product/product.model';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productservices: productServices, private router: Router) {
    
   }

  ngOnInit(): void {
  }
   onaddproduct(form:any) {
    console.log(form.value)
    const product: product = form.value;
   this.productservices.addProduct(product);
   this.router.navigateByUrl('home');
}
}
