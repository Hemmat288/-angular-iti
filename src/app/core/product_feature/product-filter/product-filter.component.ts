import { Component, OnInit } from '@angular/core';
import { categorySearch } from 'src/app/_models/product/search.model';
import { SearchFilterService } from 'src/app/_sevices/product/search-filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText: any;
  categorylist!: categorySearch[];
  constructor(private SearchFilterService: SearchFilterService) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categorylist = this.SearchFilterService.getAllCategory();
  }
}
