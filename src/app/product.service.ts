import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError as observableThrowError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

import { Product } from './product';

import { PRODUCTS } from './mock-products';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [];

  constructor(private http: HttpClient) {

  }

  getProduct(product_id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products) =>
        products.find((product) => product.product_id === product_id)
      )
    );
  }
}
