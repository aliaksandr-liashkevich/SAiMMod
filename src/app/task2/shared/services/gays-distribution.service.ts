import { Injectable } from '@angular/core';
import { HistogramGeneratorService } from './histogram-generator.service';
import { GaysDistribution, DistributionResult } from '../models';
import { GeneratorService } from 'src/app/task2/shared/services';

@Injectable({
  providedIn: 'root'
})
export class GaysDistributionService {
  private values: GaysDistribution;
  private generatedSequence: Array<number>;
  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;

  constructor(
    private histogramService: HistogramGeneratorService,
    private generator: GeneratorService
  ) { }

  public init(values: GaysDistribution) {
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
    const n: number = 6;
    this.generator.init(n * this.values.n);
    let normalized = this.generator.getNormalizedRandomNumbers();
    const length = this.values.n;

    this.generatedSequence = new Array<number>(length);
    let sum = 0;
    let j = 0;
    let shift = 0;
    for(let i = 0; i < length; i++) {
      shift += n;
      sum = 0;
      for(; j < shift; j++) {
        sum += normalized[j];
      }

      this.generatedSequence[i] = this.values.m + this.values.q * Math.sqrt(12 / n) * (sum - n / 2);
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
