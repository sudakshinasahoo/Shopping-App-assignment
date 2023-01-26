import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts: any;
  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this.productServiceService.getAllProducts().subscribe((products: any) => {
      this.allProducts = products;

    });

}
}