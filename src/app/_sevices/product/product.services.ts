import { AllProductResponse, product, productWithCounter } from 'src/app/_models/product/product.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { not } from '@angular/compiler/src/output/output_ast';
import { Observable, observable } from 'rxjs';
import { AuthService } from './../auth.service';
@Injectable({
  providedIn: 'root',
})
export class productServices {
  // getAllpaymentType(): import('../../_models/product/payment-Type.model').paymentType[] {
  //   throw new Error('Method not implemented.');
  // }

  productArray: product[] = [
    // {
    //   id: 1,
    //   data: [{ name: 'camera', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 1, name: 'food' },
    //   tag: { name: 'food' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   dicount: 1233,
    //   imageSrc: 'https://picsum.photos/200/307',
    // },
    // {
    //   id: 2,
    //   data: [{ name: 'photocamera', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 2, name: 'electronic' },
    //   tag: { name: 'food' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   dicount: 1233,
    //   imageSrc: 'https://picsum.photos/205/307',
    // },
    // {
    //   id: 3,
    //   data: [{ name: 'laptop', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 3, name: 'clothes' },
    //   tag: { id: 4, name: 'toy' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   imageSrc: 'https://picsum.photos/2007/307',
    // },
    // {
    //   id: 4,
    //   data: [{ name: 'pc', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 5, name: 'baby' },
    //   tag: { name: 'food' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   dicount: 1233,
    //   imageSrc: 'https://picsum.photos/200/300',
    // },
    // {
    //   id: 5,
    //   data: [{ name: 'phone', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 6, name: 'sport' },
    //   tag: { name: 'food' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   dicount: 23,
    //   imageSrc: 'https://picsum.photos/200/301',
    // },
    // {
    //   id: 6,
    //   data: [{ name: 'tablet', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 7, name: 'funrniture' },
    //   tag: { name: 'food' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   imageSrc: 'https://picsum.photos/200/309',
    // },
    // {
    //   id: 7,
    //   data: [{ name: 'tv', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 8, name: 'books' },
    //   tag: { name: 'food' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   dicount: 33,
    //   imageSrc: 'https://picsum.photos/206/304',
    // },
    // {
    //   id: 8,
    //   data: [{ name: 'fridge', descrition: 'dd', lang: { name: 'en' } }],
    //   category: { id: 9, name: 'Automotives' },
    //   tag: { name: 'food' },
    //   paymentType: [{ name: 'cash' }],
    //   price: 123,
    //   dicount: 1233,
    //   imageSrc: 'https://picsum.photos/208/300',
    // },
  ];
  constructor(private HttpClient: HttpClient) {}
  private cartArray: productWithCounter[] = [];

  cardHasBeenChanged: EventEmitter<productWithCounter[]> = new EventEmitter<
    productWithCounter[]
  >();

  getAllProduct(): Observable<AllProductResponse> {
    const headers = new HttpHeaders({
      Autherization:sessionStorage.getItem('token')!
    });
    return this.HttpClient.get<AllProductResponse>(
      environment.baseUrl + 'product'  );
  }
  getProductById(id: number) {
    return this.productArray.find((product) => product.id == id);
  }
  addProduct(product: product): void {
    this.productArray.push(product);
  }
  deleteProduct(product: product) {
    this.cartArray.splice(this.cartArray.indexOf(product), 1);
  }
  updateProduct() {}

  addProductForCard(product: product) {
    if (!this.cartArray.includes(product)) {
      product.mount = 1;
      this.cartArray.push(product);
      this.cardHasBeenChanged.emit(this.cartArray);
    } else {
      product.mount ? product.mount++ : product.mount;
    }
  }
}
