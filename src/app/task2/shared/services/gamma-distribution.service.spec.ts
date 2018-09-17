import { TestBed, inject } from '@angular/core/testing';

import { GammaDistributionService } from './gamma-distribution.service';

describe('GammaDistributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GammaDistributionService]
    });
  });

  it('should be created', inject([GammaDistributionService], (service: GammaDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
