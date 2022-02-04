import { Injectable } from '@angular/core';
import { category } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  categoryArray: category[] = [
    {id:1,name:"food"},
    {id:2,name:"electronic"},
    {id:3,name:"clothes"},
    { id: 4, name: "toy" },
    { id: 5, name: "baby" },
    { id: 6, name: "sport" },
    { id: 7, name: "funrniture" },
    { id: 8, name: "books" },
    {id:9,name:"Automotives"}
  ]

  constructor() { }

  getAllcategories():category[] {
    return this.categoryArray;
  }
    getbyid() { }
  add() { }
  edit() { }
  delete() { }
}
