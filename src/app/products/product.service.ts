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

}
