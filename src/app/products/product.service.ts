import { HttpClient, HttpErrorResponse, HttpController, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product as IProduct } from './product';



import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
// import { Hero } from '../core';

@Injectable({ providedIn: 'root' })
export class ProductService extends EntityCollectionServiceBase<IProduct> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementsFactory);
  }
}

@Injectable()
export class ProductService implements HttpController, HttpErrorResponse, HttpHeaders{
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
    has(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    get(name: string): string {
        throw new Error("Method not implemented.");
    }
    keys(): string[] {
        throw new Error("Method not implemented.");
    }
    getAll(name: string): string[] {
        throw new Error("Method not implemented.");
    }
    append(name: string, value: string | string[]): HttpHeaders {
        throw new Error("Method not implemented.");
    }
    set(name: string, value: string | string[]): HttpHeaders {
        throw new Error("Method not implemented.");
    }
    delete(name: string, value?: string | string[]): HttpHeaders {
        throw new Error("Method not implemented.");
    }
    name: "HttpErrorResponse";
    message: string;
    error: any;
    ok: false;
    headers: HttpHeaders;
    status: number;
    statusText: string;
    url: string;
    type: import("@angular/common/http").HttpEventType.ResponseHeader | import("@angular/common/http").HttpEventType.Response;

  // getProducts(...args: []): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ProductService: fetched product');
    // return of(PRODUCTS);
  // }

getProducts():Observable<IProduct[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ProductService: fetched product');
    // return of(PRODUCTS);
  return this.http.get<IProduct[]>(this.productsUrl).
    pipe(
    catchError(this.handleError<IProduct[]>('getProducts', []))
  )
}

  getProduct(product_id):Observable<IProduct[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ProductService: fetched product');
    // return of(PRODUCTS);
    return this.http.get<IProduct[]>(
      this.productsUrl + product_id)
      .pipe(
    catchError(this.handleError<IProduct[]>('getProducts', []))
  )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


}
