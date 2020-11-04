import * as http from "http";

import { Product } from './product';

import { Component, OnInit } from '@angular/core';

// import { Hero } from './hero';
// import { ProductsService } from './products.service';

// this.productService.deleteProduct(product.id).subscribe();


// const req = http.get<Product>('/api/products');
// 0 requests made - .subscribe() not called.
// req.subscribe();
// 1 request made.
// req.subscribe();
// 2 requests made.

// import { ProductService } from 'products.service.ts';

// import { Component, OnInit } from '@angular/core';

 import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  //providers: [ProductsService],
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  editProduct: Product; // the hero currently being edited

  constructor(private productsService: ProductsService, private messageService: MessageService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  add(title: string): void {
    this.editProduct = undefined;
    title = title.trim();
    if (!title) {
      return;
    }

    // The server will generate the id for this new hero
    const newProduct: Product = { title } as Product;
    this.productsService
      .addProduct(newProduct)
      .subscribe((product) => this.products.push(product));
  }

  delete(product: Product): void {
    this.products = this.products.filter((p) => p !== product);
    this.productsService.deleteHero(product.product_id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  }

  edit(product: Product) {
    this.editProduct = product;
  }

  search(searchTerm: string) {
    this.editProduct = undefined;
    if (searchTerm) {
      this.productsService
        .searchProducts(searchTerm)
        .subscribe((products) => (this.products = products));
    }
  }

  update() {
    if (this.editProduct) {
      this.productsService.updateProduct(this.editProduct).subscribe((product) => {
        // replace the hero in the heroes list with update from server
        const ix = product ? this.products.findIndex((p) => p.product_id === product.product_id) : -1;
        if (ix > -1) {
          this.products[ix] = product;
        }
      });
      this.editProduct = undefined;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
