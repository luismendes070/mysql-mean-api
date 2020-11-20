import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IProduct as IProduct } from './product';

import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ProductService extends EntityCollectionServiceBase<IProduct> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementsFactory);
  }

  getMockProducts(){
    return this.http.get("/assets/data/products.json");
  }

  //getProducts(method) Observable<Object>.pipe<any,any>(op1: OperatorFunction<Object, any>, op2:Operator);
  getRemoteProducts(){
    
    return this.http.get("

https://ng-api-produtos.herokuapp.com/api/products

    ").pipe(


map(
  (data:any) => {
    console.log("Before mapping: ", data);

    return data.data.children;
  }
)


    ).filter(

(data:any) => {
  return true;
}


    );

  }

}
