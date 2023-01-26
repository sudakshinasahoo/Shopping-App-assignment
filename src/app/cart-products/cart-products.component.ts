import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../model/product';
import { CanExit } from '../auth-guard/can-exit.guard';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit, CanExit  {
cartProducts:Product[];
quantity = 0;
  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this.cartProducts = [];
    this.getCartProduct();

  }

  
  removeCartProduct(product: any) {
    this.productServiceService.removeLocalCartProduct(product);

    // Recalling
    this.getCartProduct();
  }

  getCartProduct(){
    this.productServiceService.cartProducts$.subscribe((cartProducts:any)=>{
      this.cartProducts = cartProducts;
      
    })
  }

  canDeactivate(): Promise<any> | boolean {
    const confirmResult = confirm('Are you sure you want to leave this page ? ');
    if (confirmResult === true) {
      return true;
    } else {
      return false;
    }
  }


}
