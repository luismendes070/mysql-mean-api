import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

private const productsUrl = 'api/products';  // URL to web api

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: '' },
      { id: 12, name: '' },
      { id: 13, name: '' },
      { id: 14, name: '' },
      { id: 15, name: '' },
      { id: 16, name: '' },
      { id: 17, name: '' },
      { id: 18, name: '' },
      { id: 19, name: '' },
      { id: 20, name: '' }
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
