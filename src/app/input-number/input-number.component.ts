import { Component,Input, OnInit } from '@angular/core';
import {Product} from '../products-list/product'

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  product: Product;

  ngOnInit(): void {
  }
  upQuantity(product: Product): void{
    if (product.quantity<product.stock){
    product.quantity++;
    }
  }
  downQuantity(product: Product): void{
   if (product.quantity>0)
      product.quantity--;
  }
}
