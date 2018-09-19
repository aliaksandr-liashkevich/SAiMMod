import { Injectable } from '@angular/core';
import { Histogram } from '../models/histogram';
import { Interval } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HistogramGeneratorService {
  private length: number;
  private normalizedRandomNumbers: number[];
  private K: number;

  private xMax: number;
  private xMin: number;
  private variation: number;
  private delta: number;
  private mNumbers: number[];
  private cNumbers: number[];
  private result: any[];

  private yScaleMax: number;
  private yScaleMin: number;

  constructor() { }

  public generate(normalizedRandomNumbers: number[], k: number): Histogram {
    this.normalizedRandomNumbers = normalizedRandomNumbers;
    this.length = this.normalizedRandomNumbers.length;
    this.K = k;

    this.calculateXMax();
    this.calculateXMin();
    this.calculateVariation();
    this.calculateDelta();
    this.calculateMNumbers();
    this.calculateCNumners();
    this.calculateYScaleMax();
    this.calculateYScaleMin();

    return new Histogram(
      this.result,
      this.yScaleMax,
      this.yScaleMin,
    );
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
    this.delta = this.variation / this.K;
  }

  private calculateMNumbers() {
    console.log(`Max ${this.xMax}; Min ${this.xMin}`);
    console.log(this.normalizedRandomNumbers);
    const length = this.normalizedRandomNumbers.length;

    this.mNumbers = new Array<number>(this.K);
    for (let i = 0; i < this.K; i++) {
      this.mNumbers[i] = 0;
    }

    if (this.xMax === this.xMin) {
      for (let i = 0; i < this.K; i++) {
        this.mNumbers[i] = Math.floor(this.length / this.K);
      }

      console.log(this.mNumbers);

      return;
    }

    const intervals = new Array<Interval>(this.K);
    intervals[0] = new Interval(
      this.xMin,
      this.xMin + this.delta
    );
    for (let i = 1; i < this.K; i++) {
      intervals[i] = new Interval(
        intervals[i - 1].max,
        intervals[i - 1].max + this.delta
      );
    }

    let element: number;
    for (let j = 0; j < length; j++) {
      element = this.normalizedRandomNumbers[j];
      for (let i = 0; i < this.K; i++) {
        if (intervals[i].min <= element && intervals[i].max > element) {
          this.mNumbers[i]++;
        }
      }
    }

    console.log(this.mNumbers);
  
  }

  private calculateCNumners() {
    this.cNumbers = this.mNumbers
      .map(x => x / this.length);

    console.log(this.cNumbers);

    let i = 0;
    this.result = this.cNumbers.map(function(c){
      i++;
      return {
        value: c,
        name: i + '. ' + c.toString()
      };
    });
  }

  private calculateYScaleMax() {
    const max = this.cNumbers.reduce(function(a, b) {
      return Math.max(a, b);
    });

    this.yScaleMax = max;
  }

  private calculateYScaleMin() {
    let min = this.cNumbers.reduce(function(a, b) {
      return Math.min(a, b);
    });

    if (min === this.yScaleMax) {
      min = 0;
    }

    this.yScaleMin = min;
  }
}
