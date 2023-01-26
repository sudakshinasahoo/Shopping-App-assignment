import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    
  submitted = false;
  displayBasic = true;
  constructor(private productServiceService: ProductServiceService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
  });
  }
  onSubmit() { 
    this.productServiceService.loginUser();

    if(this.loginForm.value.login === 'mor_2314' && this.loginForm.value.password === '83r5^_'){
      this.submitted = true;
   this.productServiceService.loginUser();
   this.router.navigate(['../manage-products'])

    }
    this.router.navigate(['../manage-products'])


}
}
