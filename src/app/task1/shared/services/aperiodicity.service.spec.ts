import { TestBed, inject } from '@angular/core/testing';

import { AperiodicityService } from './aperiodicity.service';

describe('AperiodicityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AperiodicityService]
    });
  });

  it('should be created', inject([AperiodicityService], (service: AperiodicityService) => {
    expect(service).toBeTruthy();
  }));
});
