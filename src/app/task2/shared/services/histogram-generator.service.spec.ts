import { TestBed, inject } from '@angular/core/testing';

import { HistogramGeneratorService } from './histogram-generator.service';

describe('HistogramGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistogramGeneratorService]
    });
  });

  it('should be created', inject([HistogramGeneratorService], (service: HistogramGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
