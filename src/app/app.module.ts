import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { FormsModule } from '@angular/forms';
import { PintureriaAboutComponent } from './pintureria-about/pintureria-about.component';
import { PintureriaProductsComponent } from './pintureria-products/pintureria-products.component';
import { CartComponent } from './cart/cart.component'

import { AppRoutingModule } from './app-routing.module';
import { PintureriaHomeComponent } from './pintureria-home/pintureria-home.component';
import { InputNumberComponent } from './input-number/input-number.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PintureriaAboutComponent,
    PintureriaProductsComponent,
    CartComponent,
    PintureriaHomeComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
