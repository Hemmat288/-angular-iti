import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product_feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product_feature/product-form/product-form.component';
import { ProductListComponent } from './core/product_feature/product-list/product-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
  

const routes: Routes = [
  {path: '', component:ProductListComponent},
  {path: 'home',redirectTo:'',pathMatch:'full'},
  {path: 'product_list', redirectTo:'',pathMatch:'full'},
  { path: 'product_details', component: ProductDetailsComponent },
  { path: 'product_add', component: ProductFormComponent },
  { path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
