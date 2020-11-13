import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fail } from 'assert';
import { Product } from 'src/app/product';

import {
  HttpBackend
} from '@angular/common/http';
import {
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

providedIn: 'root';

import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import { AppModule } from '../app/app.module';
import { ProductService } from '../app/product.service';
import { AppComponent } from './app.component';

let loader: HarnessLoader;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    let comp: AppComponent;


//inject
    comp = TestBed.inject(AppComponent);
    

    // info using npm@6.14.8
// info using node@v14.15.0
    it('error code ELIFECYCLE error errno 1 nvm use ', () => {
      console.log('testing... ');
      expect(comp);
  // return fail(true);
});

    it('should typescript 4.0.5', () => {
  console.log('testing typescript 4.0.5 ... ');
  const t = require('typescript');
  expect(t).toBe(t.version);
  // return fail(true);
});

    it('should npm 6.14.8', () => {
  console.log('testing npm 6.14.8 ... ');
  const npm = require('npm');
  // let node = require('node');
  expect('6.14.6').toBe(npm.version);
  // return fail(true);
});

    it('should node 14.15.0', () => {
  console.log('testing node 14.15.0 ... ');
  const node = require('node');
  expect('14.15.0').toBe(node.version);
  // return fail(true);
});

    await TestBed.configureTestingModule({imports: [AppModule], declarations: [AppComponent]})
        .compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);

  }



  );
});

it('bootstrap', () => {

  expect(AppComponent).toBe(null);
});


