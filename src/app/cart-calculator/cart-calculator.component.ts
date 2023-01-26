import { Component, OnInit, Input,
  OnChanges,
  SimpleChange,
  SimpleChanges} from '@angular/core';
  import { Router } from "@angular/router";
  import { Product } from '../model/product';


@Component({
  selector: 'app-cart-calculator',
  templateUrl: './cart-calculator.component.html',
  styleUrls: ['./cart-calculator.component.scss']
})
export class CartCalculatorComponent implements OnInit,OnChanges {
  @Input() products: Product[];
  totalValue = 0;
  display: boolean = false;
  displayBasic = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes['products'];

    const products: any[] = dataChanges.currentValue;
    this.totalValue = 0;
    products.forEach((product) => {
      this.totalValue += product.price;
    });
  }

  showDialog() {
    this.display = true;
    setTimeout(()=>{                          
this.router.navigate(['./'])  }, 5000);
}
}
