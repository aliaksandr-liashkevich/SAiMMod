import { TestBed, inject } from '@angular/core/testing';

import { SimpsonDistributionService } from './simpson-distribution.service';

describe('SimpsonDistributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpsonDistributionService]
    });
  });

  it('should be created', inject([SimpsonDistributionService], (service: SimpsonDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
