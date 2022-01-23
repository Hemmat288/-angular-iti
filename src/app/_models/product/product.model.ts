 
import {supplier} from "./supliers.models"
export interface product{
   
    id?: number;
    name: string;
    price: number;
    dicount?: number;
    imageSrc: string;
    supplier ?: supplier;
}