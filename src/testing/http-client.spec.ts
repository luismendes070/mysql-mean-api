// Http testing module and mocking controller
import // HttpClientTestingModule,
// HttpTestingController
'@angular/common/http/testing';

// import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fail } from 'assert';
import { Product } from 'src/app/product';

import {
  HttpBackend,
  // HttpClient
} from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

providedIn: 'root';
import { IssTrackingDataService } from 'src\\app\\iss-tracking-data.service';

describe('IssTrackingDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let issTrackingDataService: IssTrackingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssTrackingDataService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    issTrackingDataService = new IssTrackingDataService(httpClient);
  });

  it('exists', inject(
    [IssTrackingDataService],
    (service: IssTrackingDataService) => {
      expect(service).toBeTruthy();
    }
  ));

  /* describe('location', () => {
    it('gets the location of the ISS now', () => {
      issTrackingDataService.location().subscribe((x) => {
        expect(x).toEqual({ longitude: -138.1719, latitude: 44.4423 });
      });
      const req = httpTestingController.expectOne(
        'http://api.open-notify.org/iss-now.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush({
        iss_position: { longitude: '-138.1719', latitude: '44.4423' },
        timestamp: 1525950644,
        message: 'success',
      });
      httpTestingController.verify();
    });
  }); */
});

// import app from './server.js';

//import 'jasmine';

/* export interface Product {
  title: string;
  type: string;
  description: string;
  filename: string;
  height: number;
  width: number;
  price: number;
  rating: number;
  product_id: number;
} */

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  /// Tests begin ///
});

const testProduct: Product = {
  title: 'Asparagus',
  type: 'vegetable',
  description: 'Asparagus with ham on the wooden table',
  filename: '2.jpg',
  height: 450,
  width: 299,
  price: 18.95,
  rating: 3,
  product_id: 0,
};

it('can test HttpClient.get', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const testUrl = '/api/products';

  // Make an HTTP GET request
  httpClient.get<Product>(testUrl).subscribe((product) =>
    // When observable resolves, result should match test data
    expect(product[2]).toEqual(testProduct)
  );

  // The following `expectOne()` will match the request's URL.
  // If no requests or multiple requests matched that URL
  // `expectOne()` would throw.
  const req = httpTestingController.expectOne('/products');

  // Assert that the request is a GET.
  expect(req.request.method).toEqual('GET');

  // Respond with mock data, causing Observable to resolve.
  // Subscribe callback asserts that correct data was returned.
  req.flush(testProduct);

  // Finally, assert that there are no outstanding requests.
  httpTestingController.verify();
});

afterEach(() => {
  let httpTestingController: HttpTestingController;
  // After every test, assert that there are no more pending requests.
  httpTestingController.verify();
});

it('can test for 404 error', () => {
  // Expect one request with an authorization header
  let httpTestingController: HttpTestingController;
  const req2 = httpTestingController.expectOne((request) =>
    request.headers.has('Authorization')
  );

  // get all pending requests that match the given URL
  const testUrl = '/api/products';
  const requests = httpTestingController.match(testUrl);
  expect(requests.length).toEqual(3);

  // Respond to each request with different results
  requests[0].flush([]);
  requests[1].flush([testProduct[0]]);
  requests[2].flush(testProduct);

  const emsg = 'deliberate 404 error';
  let httpClient: HttpClient;
  httpClient.get<Product[]>(testUrl).subscribe(
    (data) => fail('should have failed with the 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404, 'status');
      expect(error.error).toEqual(emsg, 'message');
    }
  );

  const req = httpTestingController.expectOne(testUrl);

  // Respond with mock error
  req.flush(emsg, { status: 404, statusText: 'Not Found' });
});

it('stackoverflow bodyparser verify', () => {
  // const server = require('server.js');
  //let  bodyParser = require('body-parser');
  //return (true)fail(true);
});

it('interceptor', () => {
  // const ensure = require('src\\app\\http-interceptors\\ensure-http-interceptors');
  // ensure.
  // var interceptor = require('');
  // return fail(true);
});

it('should input forms', () => {
  // return fail(true);
});

it('should upload json', () => {
  // return fail(true);
});

it('should render an image', () => {
  // return fail(true);
});

it('webpack', () => {
  // return fail(true);
});

it('localhost wamp mysql server version', () => {
  // const sql = 'select version()';

  console.log(require('queries').query('select version()'));

  console.log(require('queries').query('select * from products'));

  console.log(require('queries').query('select * from jsonproducts'));

  const queries = require('queries').query('select from * jsonproducts');

  console.log(queries['jsonproducts']);

  // const server = require('server');
  // app.get('/', routes.index);
  // app.get('/products', product.list);

  expect(queries['jsonproducts']).toBe([]);

  // return fail(true);
});

it('should calback async load exists', () => {

  // assert
  const index = require('index.html');
  // a
  // a
  expect(index).toBe(index);

  return fail(true);
  
});

it('should ngcc ivy exists', () => {

  // assert
  const ngcc = require('@angular/compiler');
  // a
  // a
  expect(ngcc).toBe(ngcc);

  return fail(true);
});
