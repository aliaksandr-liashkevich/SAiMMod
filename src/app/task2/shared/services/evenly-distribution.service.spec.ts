import { TestBed, inject } from '@angular/core/testing';

import { EvenlyDistributionService } from './evenly-distribution.service';

describe('EvenlyDistributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvenlyDistributionService]
    });
  });

  it('should be created', inject([EvenlyDistributionService], (service: EvenlyDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
