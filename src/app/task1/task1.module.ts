import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';
import { GeneratorService } from './shared/services/generator.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [
    CommonModule,
    Task1RoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    GeneratorService
  ],
  declarations: [Task1Component, ResultComponent]
})
export class Task1Module { }
