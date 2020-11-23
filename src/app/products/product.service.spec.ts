import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

// import { PRODUCTS } from './mock-products';

describe('ProductService', () => {
  let service: ProductService;

  const PRODUCTS[]: typeof(require('./mock-products'));

  beforeEach(async () => {

await TestBed.configureTestingModule({
  declarations: [ProductService, PRODUCTS],
  imports: []
}).compileComponents();

    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
