import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/_models/product/product.model';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
@Input() listAdd !: product[];
  constructor() { }
 
  dropdownopended = false;
  delete= false;

  ngOnInit(): void {
  }

}
