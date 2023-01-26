import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  cartProducts$ = new BehaviorSubject<any>([]);
  isLogedinUser$ = new BehaviorSubject<any>(false);
  cartProducts:any;
allProducts$: Observable<any>
  constructor(private http: HttpClient) {
    this.cartProducts = [];
  }

  getAllProducts(forceRefresh = false): Observable<any> {
    if(!this.allProducts$ || forceRefresh){
      this.allProducts$ = this.http.get<any>('https://fakestoreapi.com/products').pipe(shareReplay(1))
    }
    return this.allProducts$;

  }

  getProductById(id: number) {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`)
  }

  addToCart(product: any) {
    this.cartProducts.push(product);
    this.cartProducts$.next( this.cartProducts);
  }

  removeLocalCartProduct(product:any){

  }

  loginUser(){
this.isLogedinUser$.next(true);
  }

  logOutUser(){
    this.isLogedinUser$.next(false);

  }
}
