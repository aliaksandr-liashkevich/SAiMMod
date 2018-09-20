import { TestBed, inject } from '@angular/core/testing';

import { TriangleDistributionService } from './triangle-distribution.service';

describe('TriangleDistributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleDistributionService]
    });
  });

  it('should be created', inject([TriangleDistributionService], (service: TriangleDistributionService) => {
    expect(service).toBeTruthy();
  }));
});
