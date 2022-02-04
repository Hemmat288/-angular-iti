import { Component, OnInit } from '@angular/core';
import { productServices } from 'src/app/_sevices/product/product.services';
import { ActivatedRoute, Router } from '@angular/router';
import { paymentType } from 'src/app/_models/product/payment-Type.model';
import { PaymentTypeService } from 'src/app/_sevices/product/payment-type.service';
import { category } from 'src/app/_models/product/category.model';
import { CategoryService } from 'src/app/_sevices/product/category.service';
import { NgForm } from '@angular/forms';
import { product } from 'src/app/_models/product/product.model';
import { tags } from 'src/app/_models/product/tags.model';




@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  paymenttypes: paymentType[]=[]
  categoryArray!: category[];
  product = {} as product;
  tags: tags[] = [];
  editMode = false;
  constructor(
    private productservices: productServices,
    private router: Router,
    private paymentTypeservice: PaymentTypeService,
    private categoryservice: CategoryService,
    private ActivatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.getAllproductservice();
    this.getAllCategories();

    console.log('url', this.ActivatedRoute.snapshot.url[0].path);
    console.log(+this.ActivatedRoute.snapshot.params['productId']);

    if (this.ActivatedRoute.snapshot.url[0].path == 'edit') {
      this.editMode = true;
    }
    if (this.editMode) {
      this.getProductbyid();
    }
  console.log(this.editMode);

  }
  getProductbyid() {
    const id = +this.ActivatedRoute.snapshot.params['productId'];
    this.product = this.productservices.getProductById(id)!;
    console.log(this.product);
  }
  getAllproductservice() {
    this.paymenttypes = this.paymentTypeservice.getAllpaymentType();
     
  }
  getAllCategories() {
    this.categoryArray = this.categoryservice.getAllcategories();
  }
  onCheckBoxChanged(index: number) {
    if (this.product.paymentType) {
      this.product.paymentType = [...this.product.paymentType, this.paymenttypes[index]];
    } else {
      this.product.paymentType = [this.paymenttypes[index]];
    }
    console.log(this.product);
  }
  onaddproduct(form:any) {
    console.log(form);
     const product: product = form.value;
     this.productservices.addProduct(product);
    this.router.navigateByUrl('home');
  }
}
