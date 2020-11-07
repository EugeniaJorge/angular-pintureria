import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  product = {
    "type":"Latex",
    "brand":"Alba",
    "price":450,
    "stock":5,
    "image": "assets/image/latex.jpg",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
