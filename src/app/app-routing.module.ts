import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import{ LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { CanExitGuard } from './auth-guard/can-exit.guard';

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent,
    canDeactivate: [CanExitGuard],
  },
  {
    
      path: "product/:id",
      component: ProductDetailsComponent,
      canDeactivate: [CanExitGuard]
    
  },
  {
    path: "cart",
    component: CartProductsComponent,
    canDeactivate: [CanExitGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canDeactivate: [CanExitGuard]
  },
  {
    path: "manage-products",
    component: ManageProductComponent,
    canDeactivate: [CanExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
