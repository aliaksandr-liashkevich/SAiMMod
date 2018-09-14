import { Injectable } from '@angular/core';
import { GeneratorService } from './generator.service';
import { LemerResult, Lemer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AperiodicityService {
  private period: number;
  private l: number;

  constructor(
    private generatorService: GeneratorService
  ) { }

  public getAperiodicity(lemer: Lemer, array: Array<number>){
    const normalizedNumbers = array;
    const length = normalizedNumbers.length;
    const lastElement = normalizedNumbers[length - 1];
    let i1: number | null = null, i2: number | null = null;
    
    for(let i = 0; i < length; i++) {
      if(normalizedNumbers[i] == lastElement) {
        if(i1 == null) {
          i1 = i;
        }else {
          i2 = i;
          break;
        }
      }
    }

    this.period = i2 - i1;

    let i3: number | null = null;

    for(let i = 0; i < length; i++) {
      if(normalizedNumbers[i] == normalizedNumbers[i + this.period]) {
        i3 = i;
        break;
      }
    }

    this.l = i3 + this.period;
    console.log("L -  " + this.l);
    console.log(i3);

    console.log(this.period);
    
  }
}
