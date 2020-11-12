import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import { ProductCartService } from '../product-cart.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product []=[ 
  {
    type:"Latex",
    brand:"Alba",
    price:4500,
    stock:5,
    image: "assets/image/latex.jpg",
    offer: false,
    quantity:0,
  },
  {
    type:"Esmalte",
    brand:"Sherwin Williams",
    price:4000,
    stock:1,
    image: "assets/image/esmalte.png",
    offer: true,
    quantity:0,
  },
  {
    type:"Pisos",
    brand:"Brikol",
    price:3500,
    stock:0,
    image: "assets/image/pisos.jpg",
    offer: false,
    quantity:0,
  },
  {
    type:"Piletas",
    brand:"Plavicon",
    price:2000,
    stock:15,
    image: "assets/image/piletas.jpg",
    offer: false,
    quantity:0,
  },
  ]

  constructor(private cart: ProductCartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
   
  maxProducts(m: string){
    alert(m);
  }
}
