import { Component, OnInit } from '@angular/core';
 

import { product } from 'src/app/_models/product/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productArray: product[] = [

    {
    id: 1,
    name: 'camera',
    price: 123,
    dicount: 1233,
  imageSrc:'https://picsum.photos/200/307'

    },
    {
    id: 2,
    name: 'photoCamera',
    price: 123,
    dicount: 1233,
imageSrc:'https://picsum.photos/205/307'

    },
    {
    id: 3,
    name: 'labtop',
    price: 123,
  
    imageSrc:'https://picsum.photos/2007/307'

    },
    {
    id: 4,
    name: 'PC',
    price: 123,
    dicount: 1233,
  imageSrc:'https://picsum.photos/200/300'

    },
    {
    id: 5,
    name: 'mobile',
    price: 123,
    dicount: 23,
    imageSrc:'https://picsum.photos/200/301'

    },
    {
    id: 6,
    name: 'tablet',
    price: 123,
  
    imageSrc:'https://picsum.photos/200/309'

    },
        {
    id: 7,
    name: 'tv',
    price: 123,
    dicount: 33,
imageSrc:'https://picsum.photos/206/304'

    },
    {
    id: 8,
    name: 'fridge',
    price: 123,
    dicount: 1233,
    imageSrc:'https://picsum.photos/208/300'

    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
