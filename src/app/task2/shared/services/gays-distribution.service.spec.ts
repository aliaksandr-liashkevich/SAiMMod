import { TestBed, inject } from '@angular/core/testing';

import { GaysDistributionService } from './gays-distribution.service';

describe('GaysDistributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaysDistributionService]
    });
  });

  it('should be created', inject([GaysDistributionService], (service: GaysDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
