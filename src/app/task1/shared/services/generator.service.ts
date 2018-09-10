import { Injectable } from '@angular/core';
import { Lemer, LemerResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private randomNumbers: number[];
  private normalizedRandomNumbers: number[];

  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;
  private period: number;

  constructor() { }

  public init(values: Lemer) {
    this.generateRandomNumbers(values);
    this.generateNormalizedRandomNumbers(values.m);
    this.calculateExpectancy();
    this.calculateDispersion();
    this.calculateSqrDivergence();
    this.calculatePeriod();
  }

  public getResult(): LemerResult {
    return new LemerResult(
      this.normalizedRandomNumbers,
      this.expectancy,
      this.dispersion,
      this.sqrDivergence,
      this.period
    );
  }

  private generateRandomNumbers(values: Lemer) {
    this.randomNumbers = new Array<number>(values.n);

    this.randomNumbers[0] = values.x0;
    const length = this.randomNumbers.length;
    for (let i = 1; i < length; i++) {
      this.randomNumbers[i] = ((values.a * this.randomNumbers[i - 1]) % values.m);
    }
  }

  private generateNormalizedRandomNumbers(m: number) {
    this.normalizedRandomNumbers = this.randomNumbers
      .map((x) => x / m);
  }

  private calculateExpectancy() {
    const length = this.normalizedRandomNumbers.length;
    let sum = 0;
    this.normalizedRandomNumbers.forEach((x) => {
      sum += x;
    });

    this.expectancy = (sum / length);
  }

  private calculateDispersion() {
    const length = this.normalizedRandomNumbers.length;
    let sum = 0;
    this.normalizedRandomNumbers.forEach((x) => {
      sum += Math.pow(x - this.expectancy, 2);
    });

    this.dispersion = (sum / length);
  }

  private calculateSqrDivergence() {
    this.sqrDivergence = Math.sqrt(this.dispersion);
  }

  private calculatePeriod() {
    let count = 0;
    const set = new Set<number>();
    this.normalizedRandomNumbers.every((x) => {
      if (set.has(x)) {
        return false;
      } else {
        set.add(x);
        count++;
        return true;
      }
    });
    this.period = count;
  }

}
