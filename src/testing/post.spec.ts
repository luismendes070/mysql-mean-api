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

import {HarnessLoader} from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const url = 'https://ng-api-produtos.herokuapp.com/api/products/20';

const users = ajax({
  url: 'https://localhost/api/products/20',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs',
  },
  body: {
      'title': 'Asparagus',
  'type': 'vegetable',
  'description': 'Asparagus with ham on the wooden table',
  'filename': '2.jpg',
  'height': 450,
  'width': 299,
  'price': 18.95,
  'rating': 3,
  'product_id': 20,      
  },
}).pipe(
  map((response) => console.log('response: ', response)),
  catchError((error) => {
    console.log('error: ', error);
    return of(error);
  })
);