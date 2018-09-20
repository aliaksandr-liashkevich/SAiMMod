import { Injectable } from '@angular/core';
import { GammaDistribution, DistributionResult } from '../models';
import { HistogramGeneratorService } from './histogram-generator.service';
import { GeneratorService } from './generator.service';

@Injectable({
  providedIn: 'root'
})
export class GammaDistributionService {
  private values: GammaDistribution;
  private generatedSequence: Array<number>;
  private normalizedSequence: Array<number>;
  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;

  constructor(
    private histogramService: HistogramGeneratorService,
    private generator: GeneratorService
  ) { }

  public init(values: GammaDistribution) {
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
    const n = 10000;
    this.generator.init(n * this.values.n)
    const normalized = this.generator.getNormalizedRandomNumbers();
    this.generatedSequence = new Array<number>(n);

    let p = 1;
    let j = 0;
    let shift = 0;
    for(let i = 0; i < n; i++) {
      shift += this.values.n;
      p = 1;
      for(; j < shift; j++) {
        p *= normalized[j];
      }

      this.generatedSequence[i] = - 1 / this.values.l * Math.log(p);
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

  private calculateFactorial(x: number) {
    if(x == 0) {
      return 1;
    }

    return x * this.calculateFactorial(x - 1);
  }
}
