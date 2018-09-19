import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Task2RoutingModule } from './task2-routing.module';
import { Task2Component } from './task2.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvenlyDistributionComponent } from './result/evenly-distribution/evenly-distribution.component';
import { ExponentialDistributionComponent } from './result/exponential-distribution/exponential-distribution.component';
import { GammaDistributionComponent } from './result/gamma-distribution/gamma-distribution.component';
import { HistogramGeneratorService } from './shared/services/histogram-generator.service';
import { HistogramTableComponent } from './result/histogram-table/histogram-table.component';
import { GeneratorService } from '../task1/shared/services';

@NgModule({
  imports: [
    CommonModule,
    Task2RoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    HistogramGeneratorService,
    GeneratorService
  ],
  declarations: [
    Task2Component, 
    EvenlyDistributionComponent, ExponentialDistributionComponent, GammaDistributionComponent, HistogramTableComponent
  ]
})
export class Task2Module { }
