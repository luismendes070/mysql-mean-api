import { TestBed } from '@angular/core/testing';

import { GuardrouteGuard } from './guardroute.guard';

describe('GuardrouteGuard', () => {
  let guard: GuardrouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardrouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
