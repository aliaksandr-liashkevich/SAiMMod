import { Injectable } from '@angular/core';
import { Lemer, LemerResult } from '../models';
import { Constants } from './constants';
import { Interval } from '../../../task2/shared/models';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private values: Lemer;
  private randomNumbers: number[];
  private normalizedRandomNumbers: number[];

  private expectancy: number;
  private dispersion: number;
  private sqrDivergence: number;
  private period: number;
  private delta: number;
  private xMax: number;
  private xMin: number;
  private variation: number;
  private mNumbers: number[]; 
  private cNumbers: number[];
  private yScaleMin: number;
  private yScaleMax: number;
  private indirectTest: number;

  constructor() { }

  public mainInit(values: Lemer) {
    this.values = values;
    this.generateRandomNumbers();
    this.generateNormalizedRandomNumbers();
  }

  public getResult(): LemerResult {
    return new LemerResult(
      this.normalizedRandomNumbers,
      this.expectancy,
      this.dispersion,
      this.sqrDivergence,
      this.period,
      this.cNumbers,
      this.yScaleMin,
      this.yScaleMax,
      this.indirectTest,
      0
    );
  }

  public init() {
    this.calculateExpectancy();
    this.calculateDispersion();
    this.calculateSqrDivergence();
    this.calculatePeriod();
    this.calculateXMax();
    this.calculateXMin();
    this.calculateVariation();
    this.calculateDelta();
    this.calculateMNumbers();
    this.calculateCNumners();
    this.calculateYScaleMax();
    this.calculateYScaleMin();
    this.calculateIndirectTest();
  }

public getNormalizedRandomNumbers(){
  return this.normalizedRandomNumbers;
}

public getPeriod(){
  return this.period;
}

  private generateRandomNumbers() {
    this.randomNumbers = new Array<number>(this.values.n);

    this.randomNumbers[0] = this.values.x0;
    const length = this.randomNumbers.length;
    for (let i = 1; i < length; i++) {
      this.randomNumbers[i] = ((this.values.a * this.randomNumbers[i - 1]) % this.values.m);
    }
  }

  private generateNormalizedRandomNumbers() {
    this.normalizedRandomNumbers = this.randomNumbers
      .map((x) => x / this.values.m);
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

  private calculateXMax(){
    const max = this.normalizedRandomNumbers.reduce(function(a, b) {
      return Math.max(a, b);
    });

    this.xMax = max;
  }

  private calculateXMin(){
    const min = this.normalizedRandomNumbers.reduce(function(a, b) {
      return Math.min(a, b);
    });

    this.xMin = min;
  }

  private calculateVariation() {
    this.variation = this.xMax - this.xMin;
  }

  private calculateDelta() {
    this.delta = this.variation / Constants.K;
  }

  private calculateMNumbers() {
    console.log(`Max ${this.xMax}; Min ${this.xMin}`);
    console.log(this.normalizedRandomNumbers);
    const length = this.normalizedRandomNumbers.length;

    this.mNumbers = new Array<number>(Constants.K);
    for (let i = 0; i < Constants.K; i++) {
      this.mNumbers[i] = 0;
    }

    if (this.xMax === this.xMin) {
      for (let i = 0; i < Constants.K; i++) {
        this.mNumbers[i] = Math.floor(length / Constants.K);
      }

      console.log(this.mNumbers);

      return;
    }

    const intervals = new Array<Interval>(Constants.K);
    intervals[0] = new Interval(
      this.xMin,
      this.xMin + this.delta
    );
    for (let i = 1; i < Constants.K; i++) {
      intervals[i] = new Interval(
        intervals[i - 1].max,
        intervals[i - 1].max + this.delta
      );
    }

    let element: number;
    for (let j = 0; j < length; j++) {
      element = this.normalizedRandomNumbers[j];
      for (let i = 0; i < Constants.K; i++) {
        if (intervals[i].min <= element && intervals[i].max > element) {
          this.mNumbers[i]++;
        }
      }
    }
  }

  private calculateCNumners() {
    this.cNumbers = this.mNumbers
      .map(x => x / this.values.n);
  }

  private calculateYScaleMax() {
    const max = this.cNumbers.reduce(function(a, b) {
      return Math.max(a, b);
    });

    this.yScaleMax = max;
  }

  private calculateYScaleMin() {
    const min = this.cNumbers.reduce(function(a, b) {
      return Math.min(a, b);
    });

    this.yScaleMin = min;
  }

  private calculateIndirectTest() {
    let k = 0;
    let length = this.normalizedRandomNumbers.length;

    length = length % 2 == 0 ? length : length - 1;

    for(let i = 0; i < length; i += 2) {
      var numb = Math.pow(this.normalizedRandomNumbers[i], 2) + Math.pow(this.normalizedRandomNumbers[i + 1], 2);
      
      if(numb < 1) {
        k++;
      }      
    }

    this.indirectTest = 2 * k / this.values.n;
  }

}
