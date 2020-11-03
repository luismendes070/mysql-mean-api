import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// import test from "./test.ts";
// mocha

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });
});
