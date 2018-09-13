import { Injectable } from '@angular/core';
import { Lemer, LemerResult } from '../models';
import { Constants } from './constants';

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

  public init(values: Lemer) {
    this.values = values;
    this.generateRandomNumbers();
    this.generateNormalizedRandomNumbers();
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
      this.indirectTest
    );
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
    const sortNormalizedRandomNumbers = this.normalizedRandomNumbers.sort(function(a, b) {
      return a - b;
    });

    this.mNumbers = new Array<number>(Constants.K);

    let j = 0;
    let count = 1;
    let xMaxDelta = sortNormalizedRandomNumbers[0] + this.delta;
    const length = sortNormalizedRandomNumbers.length;

    for(let i = 1; i < length; i++) {
      if(sortNormalizedRandomNumbers[i] > xMaxDelta) {
        this.mNumbers[j] = count;
        j++;
        count = 0;
        xMaxDelta += this.delta;
      }

      count++;
    }

    if(count > 0) {
      if(!this.mNumbers[Constants.K - 1]){
        this.mNumbers[Constants.K - 1] = 0; 
      }      

      this.mNumbers[Constants.K - 1] += count; 
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
