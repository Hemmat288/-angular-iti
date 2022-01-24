import { product, productWithCounter } from 'src/app/_models/product/product.model';
import { EventEmitter } from '@angular/core';
 
 
export class productServices {

 
   productArray:product[] =[

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
     constructor()  {
        
    }
    private cartArray: productWithCounter[] = [];

    cardHasBeenChanged: EventEmitter <productWithCounter[]> = new EventEmitter <productWithCounter[]> ();
   
   
    getAllProduct(): product[]{
    return this.productArray;
    };
    getProductById(){};
    addProduct(product:product):void{
        this.productArray.push(product)
    };
    deleteProduct(product: product) {
    
    } 
    updateProduct() { };
    
    addProductForCard(product: product) {   
   
    if (!this.cartArray.includes(product)) {
      product.mount = 1;
      this.cartArray.push(product);
     this.cardHasBeenChanged.emit(this.cartArray);
    } else {
      product.mount ? product.mount++ : product.mount;
    }
    };
}