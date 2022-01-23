import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'my-app';
  AddproductName : product[]=[];
 
  check = true;
  Onlistadded(listitem: product) {
    console.log('nav')
    
  // for (let index = 0; index < this.AddproductName.length; index++) {
  //   if (this.AddproductName[index]== listitem) {
  //     this.check = false;
  //   }
  //   console.log(listitem);
    
  // }
 
  //   if (this.check) {
  //        }
  //   this.check = false;
    this.AddproductName.push(listitem);
 
}
}


