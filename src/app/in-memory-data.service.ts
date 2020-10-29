import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

const productsUrl = 'api/products';  // URL to web api

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, title: '' },
      { id: 12, title: '' },
      { id: 13, title: '' },
      { id: 14, title: '' },
      { id: 15, title: '' },
      { id: 16, title: '' },
      { id: 17, title: '' },
      { id: 18, title: '' },
      { id: 19, title: '' },
      { id: 20, title: '' }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}
