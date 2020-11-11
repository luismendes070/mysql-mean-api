// Http testing module and mocking controller

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fail } from 'assert';
import { Product } from 'src/app/product';

import {
  HttpBackend,
  // HttpClient
} from '@angular/common/http';
import {
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

providedIn: 'root';
// import { IssTrackingDataService } from 'src\\app\\iss-tracking-data.service';

import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';
import { ProductService } from '../app/product.service';

let loader: HarnessLoader;



describe('app-component', () => {
  beforeEach(async () => {

    //info using npm@6.14.8
// info using node@v14.15.0
it('error code ELIFECYCLE error errno 1 nvm use ', () => {
  console.log('testing... ');
  // return fail(true);
});

it('should typescript 4.0.5', () => {
  console.log('testing typescript 4.0.5 ... ');
  let t = require('typescript');
  expect(t).toBe(t.version);
  // return fail(true);
});

it('should npm 6.14.8', () => {
  console.log('testing npm 6.14.8 ... ');
  let npm = require('npm');
  // let node = require('node');
  expect('6.14.6').toBe(npm.version);
  // return fail(true);
});

it('should node 14.15.0', () => {
  console.log('testing node 14.15.0 ... ');
  let node = require('node');
  expect('14.15.0').toBe(node.version);
  // return fail(true);
});

    await TestBed.configureTestingModule({imports: [AppModule], declarations: [AppComponent]})
        .compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
 
 });
}

describe('HttpClient ProductService testing', () => {
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
  
}); 

//h1.textContent

/* testProduct:Product = {
  
    title: 'Asparagus',
  type: 'vegetable',
  description: 'Asparagus with ham on the wooden table',
  filename: '2.jpg',
  height: 450,
  width: 299,
  price: 18.95,
  rating: 3,
  product_id: 2,
  
};

it('can test HttpClient.get', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const testUrl = '/api/products';

  // Make an HTTP GET request
  httpClient.get<Product>(testUrl).subscribe((product) =>
    // When observable resolves, result should match test data
    expect(product[2].title).toEqual(testProduct['title'])
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
}); */

// afterEach(() => {
  // let httpTestingController: HttpTestingController;
  // After every test, assert that there are no more pending requests.
  // httpTestingController.verify();
// });

/**
 * it('can test for 404 error', () => {
  // Expect one request with an authorization header

  let httpTestingController: ProductService;
  let httpTestingController2: ProductService;
  let httpTestingController3: ProductService;


  const req2 = httpTestingController.expectOne((request) =>
    request.headers.has('Authorization');
  );

  // get all pending requests that match the given URL
  const testUrl = '/api/products';
  const requests = httpTestingController2.match(testUrl);
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

const req = httpTestingController3.expectOne(testUrl);

  // Respond with mock error
  req.flush(emsg, { status: 404, statusText: 'Not Found' });
}
)
);
 * /

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




