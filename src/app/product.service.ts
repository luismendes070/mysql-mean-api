import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError as observableThrowError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

import { Product } from './product';

import { PRODUCTS } from './mock-products';
//import { MessageService } from './message.service';

//@Injectable({
//  providedIn: 'root',
//})
@Injectable({ providedIn: 'root' })
export class ProductService {

  private subscribers: Product[] = [];

  public subscribe(...args: [products: Product[]]): void {
    this.subscribers.push(products);
    return;
  }

  addProduct(newProduct: Product) {
    throw new Error('Method not implemented.');
  }
  deleteProduct(product_id: number) {
    throw new Error('Method not implemented.');
  }
  searchProducts(searchTerm: string) {
    throw new Error('Method not implemented.');
  }
  updateProduct(editProduct: Product) {
    throw new Error('Method not implemented.');
  }
  //constructor() { }
  //constructor(private messageService: MessageService) {}

  private productsUrl = 'app/products'; // URL to web api

  constructor(private http: HttpClient) {
    // super();
  }

  getHeroes() {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  getProduct(product_id: number): Observable<Product> {
    return this.getHeroes().pipe(
      map((products) =>
        products.find((product) => product.product_id === product_id)
      )
    );
  }

  save(product: Product) {
    if (product.product_id) {
      return this.put(product);
    }
    return this.post(product);
  }

  delete(product: Product) {

    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    const url = `${this.productsUrl}/${product.product_id}`;

    return this.http.delete<Product>(url).pipe(catchError(this.handleError));

  }

  // Add new Hero
  private post(product: Product) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<Product>(this.productsUrl, product)
      .pipe(catchError(this.handleError));
  }

  // Update existing Hero
  private put(product: Product) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.productsUrl}/${product.product_id}`;

    return this.http
      .put<Product>(url, product)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ProductService: fetched product');
    return of(PRODUCTS);
  }
}
