import { TestBed, inject } from '@angular/core/testing';

import { ExponentialDistributionService } from './exponential-distribution.service';

describe('ExponentialDistributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExponentialDistributionService]
    });
  });

  it('should be created', inject([ExponentialDistributionService], (service: ExponentialDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
