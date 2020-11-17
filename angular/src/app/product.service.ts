import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError as observableThrowError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

import { Product } from './product';

import { PRODUCTS } from './mock-products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  add(hero: Product) {
    //hero = PRODUCTS[hero.id];
      throw new Error('Method not implemented.');
  }
  delete(id: number) {
      throw new Error('Method not implemented.');
  }
  getAll() {
      throw new Error('Method not implemented.');
  }
  update(hero: Product) {
      throw new Error('Method not implemented.');
  }

  private products: Product[];
    entities$: Observable<Product[]>;
    loading$: Observable<boolean>;

  // constructor(private http: HttpClient) {}


}
