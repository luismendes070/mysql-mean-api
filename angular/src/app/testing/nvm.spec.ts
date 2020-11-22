// Http testing module and mocking controller

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fail } from 'assert';
import { Product } from 'src/app/product';

import {
  HttpBackend,
  // HttpClient
} from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

providedIn: 'root';
// import { IssTrackingDataService } from 'src\\app\\iss-tracking-data.service';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';
import { ProductService } from '../app/product.service';

let loader: HarnessLoader;

it('nvm-sh', () => {
  const nvmsh = require('nvm-sh');
  expect(nvmsh).toBe(null);

  // return fail(true);
});
