import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  loading$: Observable<boolean>;
  heroes$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.heroes$ = productService.entities$;
    this.loading$ = productService.loading$;
  }

  ngOnInit() {
    this.getProducts();
  }

  add(hero: Product) {
    this.productService.add(hero);
  }

  delete(hero: Product) {
    this.productService.delete(hero.id);
  }

  getProducts() {
    this.productService.getAll();
  }

  update(hero: Product) {
    this.productService.update(hero);
  }
}
