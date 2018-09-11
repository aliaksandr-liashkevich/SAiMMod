import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';
import { GeneratorService } from './shared/services/generator.service';
import { ResultComponent } from './result/result.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    Task1RoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    GeneratorService
  ],
  declarations: [Task1Component, ResultComponent]
})
export class Task1Module { }
