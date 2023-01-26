import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductServiceService } from "../services/product-service.service";
import { MessageService } from 'primeng/api';
import { Product } from '../model/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [MessageService]
})
export class ProductDetailsComponent implements OnInit {
  private sub: any;
  product: Product;
  quantity = 0;

  constructor( private route: ActivatedRoute,private productServiceService: ProductServiceService,
    private messageService: MessageService

    ) { }

  ngOnInit(): void { 
    this.quantity = 0;
    this.sub = this.route.params.subscribe((params: any) => {
    const id = params.id; 
    this.getProductDetail(+id);
  });
  }

  getProductDetail(id: number){
  const x = this.productServiceService.getProductById(id)
  .subscribe(
      (product: Product) => {
        this.product = product;
        
      },
      (error:any) => {
        console.log(error);
        
      }
    );
    }

    addToCart(product: any) {
      if(this.quantity>0){  
        product.quantity = this.quantity;    
        this.productServiceService.addToCart(product);
        this.messageService.add({
          severity: 'success',
          summary: 'product added to the cart',
          detail: '',
      });
      }else{
        this.messageService.add({
          severity: 'error',
          summary: 'Please choose quantity of the product',
          detail: '',
      });
      }
    }
}
