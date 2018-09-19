import { Injectable } from '@angular/core';
import { Lemer } from '../models/lemer';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private values: Lemer;
  private randomNumbers: number[];
  private normalizedRandomNumbers: number[];

  constructor() { 
    this.values = new Lemer(
      1000000,
      999983,
      995117,
      997573
    )
  }

  public init(n: number) {
    this.values.n = n;
    this.generateRandomNumbers();
    this.generateNormalizedRandomNumbers();
  }

  public getNormalizedRandomNumbers(): number[] {
    return this.normalizedRandomNumbers;
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
}
