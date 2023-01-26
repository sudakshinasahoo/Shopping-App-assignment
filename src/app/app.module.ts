import { NgModule,NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductServiceService } from './services/product-service.service'
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartCalculatorComponent } from './cart-calculator/cart-calculator.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { CanExitGuard } from './auth-guard/can-exit.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartProductsComponent,
    CartCalculatorComponent,
    ManageProductComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,PanelModule,InputTextModule,ButtonModule,
    AutoCompleteModule,
    InputNumberModule,
    BadgeModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DialogModule,
    CardModule,
    TableModule,
    RatingModule,
    DropdownModule,
    InputTextareaModule ],
  providers: [ProductServiceService,CanExitGuard],
  bootstrap: [AppComponent], 
   schemas: [NO_ERRORS_SCHEMA]


})
export class AppModule { }
