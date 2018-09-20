import { Injectable } from '@angular/core';
import { GeneratorService } from './generator.service';
import { HistogramGeneratorService } from './histogram-generator.service';
import { TriangleDistribution } from '../models/triangle-distribution';
import { DistributionResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TriangleDistributionService {
  private values: TriangleDistribution;
  private generatedSequence: Array<number>;
  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;

  constructor(
    private histogramService: HistogramGeneratorService,
    private generator: GeneratorService
  ) { }

  public init(values: TriangleDistribution) {
    this.values = values;
    this.generate();
    this.calculateExpectancy();
    this.calculateDispersion();
    this.calculateSqrDivergence();
  }

  public getResult() {
    const hystogram = this.histogramService.generate(this.generatedSequence, 20);
    
    return new DistributionResult(
      this.dispersion,
      this.sqrDivergence,
      this.expectancy,
      hystogram
    );
  }

  private generate() {
    const n: number = 10000;
    this.generator.init(n * 2);
    const normalized = this.generator.getNormalizedRandomNumbers();
    this.generatedSequence = new Array<number>(n);

    let j = 0;
    for (let i = 0; i < n; i++) {
      this.generatedSequence[i] = this.values.a + (this.values.b  - this.values.a) * Math.max(normalized[j], normalized[j + 1])
      j += 2;
    }
  }

  private calculateExpectancy() {
    const length = this.generatedSequence.length;
    let sum = 0;
    this.generatedSequence.forEach((x) => {
      sum += x;
    });

    this.expectancy = (sum / length);
  }

  private calculateDispersion() {
    const length = this.generatedSequence.length;
    let sum = 0;
    this.generatedSequence.forEach((x) => {
      sum += Math.pow(x - this.expectancy, 2);
    });

    this.dispersion = (sum / length);
  }

  private calculateSqrDivergence() {
    this.sqrDivergence = Math.sqrt(this.dispersion);
  }
}
