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
import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';

providedIn: 'root';
import { IssTrackingDataService } from 'src\\app\\iss-tracking-data.service';

import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

// tslint:disable-next-line:prefer-const
let loader: HarnessLoader;

declare var require: any;

it('should run new macro task callback with delay after call tick with millis', fakeAsync(() => {
     function nestedTimer(cb: () => any): void {
       setTimeout(() => setTimeout(() => cb()));
     }
     const callback = jasmine.createSpy('callback');
     nestedTimer(callback);
     expect(callback).not.toHaveBeenCalled();
     tick(0);
     // the nested timeout will also be triggered
     expect(callback).toHaveBeenCalled();
   }));

it('should calback async load exists', () => {

  // assert
  const index = require('index.html');
  // a
  // a
  expect(index).toBe(index);

  // @ts-ignore
  return fail(true);

});
