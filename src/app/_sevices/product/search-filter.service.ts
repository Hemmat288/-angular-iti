import { Injectable } from '@angular/core';
import { categorySearch } from 'src/app/_models/product/search.model';
@Injectable({
  providedIn: 'root',
})
export class SearchFilterService {
  searchArray: categorySearch[] = [
    { name: 'Arts & Crafts' },
    { name: 'Automotive' },
    { name: 'Baby' },
    { name: 'Books' },
    { name: 'Eletronics' },
    { name: ' Womens Fashion' },
    { name: 'Mens Fashion' },
    { name: 'Health & Household' },
    { name: 'Home & Kitchen' },
    { name: 'Military Accessories' },
    { name: 'Movies & Television' },
    { name: 'Sports & Outdoors' },
    { name: 'Tools & Home Improvement' },
    { name: 'Toys & Games' },
  ];
  getAllCategory(): categorySearch[] {
    return this.searchArray;
  }
  constructor() {}
}
