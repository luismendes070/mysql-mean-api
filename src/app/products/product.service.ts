import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError as observableThrowError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

import { Product as IProduct } from './product';

  import { PRODUCTS } from './mock-products';
//import { MessageService } from './message.service';

//@Injectable({
//  providedIn: 'root',
//})
@Injectable()
export class ProductService {
  addProduct(newProduct: IProduct) {
    throw new Error('Method not implemented.');
  }
  deleteProduct(product_id: number) {
    throw new Error('Method not implemented.');
  }
  searchProducts(searchTerm: string) {
    throw new Error('Method not implemented.');
  }
  updateProduct(editProduct: IProduct) {
    throw new Error('Method not implemented.');
  }
  //constructor() { }
  //constructor(private messageService: MessageService) {}

  private productsUrl = 'api/products'; // URL to web api

  constructor(private http: HttpClient) {
    
  }

  // getProducts(...args: []): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ProductService: fetched product');
    // return of(PRODUCTS);
  // }

getProducts():Observable<IProduct[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ProductService: fetched product');
    // return of(PRODUCTS);
  return this.http.get<IProduct[]>(this.productsUrl).pipe(
    catchError(this.handleError<IProduct[]>('getEvents', []))
  )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


}
