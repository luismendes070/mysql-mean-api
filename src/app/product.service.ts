import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //constructor() { }
  constructor(private messageService: MessageService) {}

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ProductService: fetched product');
    return of(PRODUCTS);
  }
}
