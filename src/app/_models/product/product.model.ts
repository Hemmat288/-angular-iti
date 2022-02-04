
import {supplier} from "./supliers.models"
import { productlang } from './productLang.model';
import { category } from './category.model';
import { tags } from './tags.model';
import { paymentType } from './payment-Type.model';
 

export interface product{


    id?: number;
    data: productlang[];
     price: number;
    dicount?: number;
    imageSrc?: string;
    supplier?: supplier;
    mount?: number;
    category: category;
    tag: tags;
    paymentType: paymentType[];

}
export interface productWithCounter extends product{
    counter?:number;
}

export interface AllProductResponse{
  product: product[],
  numberOfProducts: Number;
}
