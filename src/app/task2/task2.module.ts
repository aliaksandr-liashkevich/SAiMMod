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
import { GaysDistributionComponent } from './result/gays-distribution/gays-distribution.component';
import { TriangleDistributionComponent } from './result/triangle-distribution/triangle-distribution.component';
import { SimpsonDistributionComponent } from './result/simpson-distribution/simpson-distribution.component';
import { SimpsonDistributionService } from './shared/services/simpson-distribution.service';

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
    GeneratorService,
    SimpsonDistributionService
  ],
  declarations: [
    Task2Component, 
    EvenlyDistributionComponent, ExponentialDistributionComponent, GammaDistributionComponent, HistogramTableComponent, GaysDistributionComponent, TriangleDistributionComponent, SimpsonDistributionComponent
  ]
})
export class Task2Module { }
