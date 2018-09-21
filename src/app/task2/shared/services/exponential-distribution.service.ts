import { Injectable } from '@angular/core';
import { ExponentialDistribution } from '../models';
import { DistributionResult } from '../models/distribution-result';
import { HistogramGeneratorService } from './histogram-generator.service';
import { GeneratorService } from './generator.service';

@Injectable({
  providedIn: 'root'
})
export class ExponentialDistributionService {
  private values: ExponentialDistribution;
  private generatedSequence: Array<number>;
  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;

  constructor(
    private histogramService: HistogramGeneratorService,
    private generator: GeneratorService
  ) { }

  public init(values: ExponentialDistribution) {
    this.values = values;
    this.generator.init(10000);
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
    
    var ln = require( 'math-ln' );

    const normalized = this.generator.getNormalizedRandomNumbers();
    const length = normalized.length;

    this.generatedSequence = new Array<number>(length);

    for(let i = 0; i < length; i++) {
      this.generatedSequence[i] = (-1/this.values.l) * ln(normalized[i]);
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
