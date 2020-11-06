import { TestBed } from '@angular/core/testing';

import { IssTrackingDataService } from './iss-tracking-data.service';

describe('IssTrackingDataService', () => {
  let service: IssTrackingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssTrackingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
