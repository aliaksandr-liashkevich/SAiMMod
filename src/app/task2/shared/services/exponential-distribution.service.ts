import { Injectable } from '@angular/core';
import { ExponentialDistribution } from '../models';
import { ExponentialDistributionResult } from '../models/exponensial-distribution-result';

@Injectable({
  providedIn: 'root'
})
export class ExponentialDistributionService {
  private values: ExponentialDistribution;
  private generatedSequence: Array<number>;
  private normalizedSequence: Array<number>;
  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;

  constructor() { }

  public init(values: ExponentialDistribution) {
    this.values = values;
    this.generate();
    this.calculateExpectancy();
    this.calculateDispersion();
    this.calculateSqrDivergence();
  }

  public getResult() {
    return new ExponentialDistributionResult(
      this.dispersion,
      this.sqrDivergence,
      this.expectancy
    );
  }

  private generate() {
    let length = this.values.xMax - this.values.xMin + 1;
    let currentX = this.values.xMin;

    this.generatedSequence = new Array<number>(length);

    for(let i = 0; i < length; i++) {
      if (currentX <= 0) {
        this.generatedSequence[i] = 0;
      } else {
        this.generatedSequence[i] = this.values.l * Math.exp(-1 * this.values.l * currentX);        
      }
      
      currentX++;
    }
  }

  private calculateExpectancy() {
    this.expectancy = 1 / this.values.l;
  }

  private calculateDispersion() {
    this.dispersion = 1 / Math.pow(this.values.l, 2);
  }

  private calculateSqrDivergence() {
    this.sqrDivergence = Math.sqrt(this.dispersion);
  }
}
