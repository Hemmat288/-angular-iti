import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product_feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product_feature/product-form/product-form.component';
import { ProductListComponent } from './core/product_feature/product-list/product-list.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path: '', component:ProductListComponent},
  {path: 'home',redirectTo:'',pathMatch:'full'},
  {
    path: 'product', children: [
      {path:'list',redirectTo:'',pathMatch:'full'},
  { path: 'details/:productId', component: ProductDetailsComponent },
  { path: 'add', component: ProductFormComponent },
  { path: 'edit/:productId', component: ProductFormComponent },
    ]
  },
  {path:'login' ,component:LoginComponent},

  { path:'**' ,component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],

exports: [RouterModule]
})
export class AppRoutingModule { }
