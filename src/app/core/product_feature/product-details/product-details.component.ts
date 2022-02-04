import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_models/product/product.model';
import { productServices } from 'src/app/_sevices/product/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product = {} as product;

  relatedProducts!: product[];

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productServices: productServices
  ) {}

  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.params['productId'], 'details');
    this.getProductbyid();
    this.getrelatedProducts();
  }

  getProductbyid() {
    this.ActivatedRoute.params.subscribe(
      (params) => {
    const id = +params['productId'];
    this.product = this.productServices.getProductById(id)!;
    console.log(this.product);
      },
      (err) => {},
      () => {}
    );

  }
  getrelatedProducts() {
     //this.relatedProducts = this.productServices.getAllProduct().slice(0,4);
  }
}
