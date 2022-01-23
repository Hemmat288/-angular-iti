import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { testOneComponent } from "./test_one_component/testOneComponent";
import { TestFromCliComponent } from './test-from-cli/test-from-cli.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './core/product_feature/product-item/product-item.component';
import { ProductListComponent } from './core/product_feature/product-list/product-list.component';
import { ProductFilterComponent } from './core/product_feature/product-filter/product-filter.component';
  
 

@NgModule({
  declarations: [
    AppComponent,
     testOneComponent,
     TestFromCliComponent,
     NavbarComponent,
     ProductItemComponent,
     ProductListComponent,
     ProductFilterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 