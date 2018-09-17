import { Injectable } from '@angular/core';
import { EvenlyDistribution, EvenlyDistributionResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EvenlyDistributionService {
  private values: EvenlyDistribution;
  private generatedSequence: Array<number>;
  private normalizedSequence: Array<number>;
  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;

  constructor() { }

  public init(values: EvenlyDistribution) {
    this.values = values;
    this.generate();
    this.calculateExpectancy();
    this.calculateDispersion();
    this.calculateSqrDivergence();
  }

  public getResult() {
    return new EvenlyDistributionResult(
      this.dispersion,
      this.sqrDivergence,
      this.expectancy
    );
  }

  private generate() {
    let length = this.values.b - this.values.a;
    
    this.generatedSequence = new Array<number>(length);

    for(let i = 0; i < length; i++) {
      this.generatedSequence[i] = 1 / (this.values.b - this.values.a);
    }    
  }

  private calculateExpectancy() {
    this.expectancy = (this.values.a + this.values.b) / 2;
  }

  private calculateDispersion() {
    const value = this.values.b - this.values.a;

    this.dispersion = Math.pow( value, 2);
  }

  private calculateSqrDivergence() {
    this.sqrDivergence = Math.sqrt(this.dispersion);
  }
}
