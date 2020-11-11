import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Hero } from '../../core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductService],
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  loading$: Observable<boolean>;
  // heroes$: Observable<Hero[]>;

  selectedProduct: Product;
  private products: Product[];
  private editProduct: Product; // the product currently being edited
  private productService: ProductService[];

  constructor(private productService: ProductService) {
    this.product$ = productService.entities$;
    this.loading$ = productService.loading$;
  }

  ngOnInit() {
    this.getProducts();
  }
















  getProducts(): void {
    this.products = this.productService.getProducts();
  }













}



