import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import{ Product } from '../model/product';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
products: Product[];
loading: boolean = false;
editProduct: boolean = false;
manageProductForm:FormGroup
categories: any[]

  constructor(private productServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this.categories = [{name:'Accessories'},{name:'Clothing'},{name:'Fitness'},{name:'Electronics'}]
    this.manageProductForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.maxLength(50),Validators.minLength(3), this.noWhitespaceValidator]),
      'description': new FormControl('', [Validators.required, Validators.minLength(3),this.noWhitespaceValidator]),
      'category': new FormControl(this.categories[0].name, Validators.required),
      'price': new FormControl(0, Validators.required)

  });

    this.products = [];
    this.productServiceService.getAllProducts().subscribe((product:any)=>{
      this.products = product;
      
  });
}

noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const totalNumberOfChar = (control.value || '').trim().length>=3
  const isValid = !isWhitespace && totalNumberOfChar;
  return isValid ? null : { 'whitespace': true };
}

editProducts(){
  this.editProduct = true;
}

onSubmit(){

}
}
