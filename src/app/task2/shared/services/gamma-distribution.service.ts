import { Injectable } from '@angular/core';
import { GammaDistribution, GammaDistributionResult } from '../models';

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

  constructor() { }

  public init(values: GammaDistribution) {
    this.values = values;
    this.generate();
    this.calculateExpectancy();
    this.calculateDispersion();
    this.calculateSqrDivergence();
  }

  public getResult() {
    return new GammaDistributionResult(
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
      if(currentX <= 0){
        this.generatedSequence[i] = 0;
      } else{
        this.generatedSequence[i] = Math.exp(-1 * this.values.l * currentX) * Math.pow(currentX, this.values.n - 1) 
          * Math.pow(this.values.l, this.values.n) / this.calculateFactorial(this.values.n - 1);
      }

      currentX++;
    }
  }

  private calculateExpectancy() {
    this.expectancy = this.values.n / this.values.l;
  }

  private calculateDispersion() {
    this.dispersion = this.values.n / Math.pow(this.values.l, 2);
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
