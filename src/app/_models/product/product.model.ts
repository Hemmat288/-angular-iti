 
import {supplier} from "./supliers.models"
 
export interface product{
   
    id?: number;
    name: string;
    price: number;
    descrition?: string;
    dicount?: number;
    imageSrc?: string;
    supplier?: supplier;
    mount?: number,
 
}
export interface productWithCounter extends product{
    counter?:number;
}