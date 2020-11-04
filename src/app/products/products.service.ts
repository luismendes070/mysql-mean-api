/** DELETE: delete the product from the server */
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

import {HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import {url} from "inspector";
import { Product } from '../product';
import { Injectable } from '@angular/core';

// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { Hero } from './hero';
 import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: '17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4',
    Product: [],
  })
};

httpOptions.headers = httpOptions.headers.set('Authorization', '17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4');

const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'REPO2'
  })
};

httpOptions2.headers = httpOptions.headers.set('Authorization', '248RYIWHK18UQIJAS92HITEON1QOWEIAWK82Y3HERUAHFNJ');

@Injectable()
export class ProductsService{


  productsUrl = 'api/products';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ProductsService');
  }

deleteProduct(id:number):Observable < {} > {
  const url = `${this.productsUrl}/${id}`; // DELETE api/products/42
  return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deleteProduct'))
    );
}

/** PUT: update the hero on the server. Returns the updated hero upon success. */
updateProduct(product:Product): Observable <Product> {
  return this.http.put<Product>(this.productsUrl, product, httpOptions)
    .pipe(
      catchError(this.handleError('updateProduct', product))
    );
}


/* GET heroes whose name contains search term */
searchProducts(term: string): Observable<Product[]> {
  term = term.trim();

  // Add safe, URL encoded search parameter if there is a search term
  const options = term ?
   { params: new HttpParams().set('title', term) } : {};

  return this.http.get<Product[]>(this.productsUrl, options)
    .pipe(
      catchError(this.handleError<Product[]>('searchProducts', []))
    );
}

}// fim  ProductsService


