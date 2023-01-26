import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/api';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../model/product';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[];
  itemsForLoginUser: MenuItem[];
  value2 = '';
  selectedProduct: string;
  filteredCountries: any[];
  allProducts: Product[];
  noOfProductInCart = 0;
  menubaritems:MenuItem[];
  constructor(private router: Router, private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this.productServiceService.getAllProducts().subscribe((products: any) => {
      this.allProducts = products;

    })
    this.productServiceService.cartProducts$.subscribe((cartProducts:any)=>{
      this.noOfProductInCart = cartProducts.length;
      
    })
    this.items = [
      {
        label: 'sign in Account',
        icon: 'pi pi-user',
        command: () => this.goToLogin()


      },
      {
        label: `Total`,
        icon: 'pi pi-shopping-cart',
        command: () => this.goToCart()

      }
    ];

    this.itemsForLoginUser = [
      {
        label: 'Manage Products',
        command: () => this.goToManageProduct()

      },
      {
        label: 'John Doe',
        icon: 'pi pi-user'
      },
      {
        label: 'Total',
        icon: 'pi pi-shopping-cart',
        badge : '1',
        badgeStyleClass:'',
        command: () => this.goToCart()

      },
      {
        label: 'Logout',
        command: () => this.logout()

      }
    ];
    this.productServiceService.isLogedinUser$.subscribe((item:any)=>{
      item?this.menubaritems=  this.itemsForLoginUser:this.menubaritems = this.items;
    })

  }

  goToManageProduct(){
this.router.navigate(['../manage-products'])
  }

  goToLogin(){
    this.router.navigate(['../login']);

  }

  goToCart(){
this.router.navigate(['../cart']);
  }
  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    if (this.allProducts) {
      for (let i = 0; i < this.allProducts.length; i++) {
        let country = this.allProducts[i];
        if (country.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(country.title);
        }
      }
      this.filteredCountries = filtered;
    }
  }

  onProductselect(){
const selectedProductId = this.allProducts.filter((product:any)=>(product.title === this.selectedProduct))
this.router.navigate(['../product', selectedProductId[0].id])

  }

  logout() {
    this.productServiceService.logOutUser();
    this.router.navigate(["/"]);
  }
}
