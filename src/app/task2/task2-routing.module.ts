import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task2Component } from './task2.component';
import { EvenlyDistributionComponent } from './result/evenly-distribution/evenly-distribution.component';
import { ExponentialDistributionComponent } from './result/exponential-distribution/exponential-distribution.component';
import { GammaDistributionComponent } from './result/gamma-distribution/gamma-distribution.component';
import { GaysDistributionComponent } from './result/gays-distribution/gays-distribution.component';
import { TriangleDistributionComponent } from './result/triangle-distribution/triangle-distribution.component';
import { SimpsonDistributionComponent } from './result/simpson-distribution/simpson-distribution.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'task2',
    component: Task2Component,
    pathMatch: 'full'
  },
  {
    path: 'task2/result/evenly-distribution',
    component: EvenlyDistributionComponent,
    pathMatch: 'full'
  },
  {
    path: 'task2/result/gays-distribution',
    component: GaysDistributionComponent,
    pathMatch: 'full'
  },
  {
    path: 'task2/result/exponential-distribution',
    component: ExponentialDistributionComponent,
    pathMatch: 'full'
  },
  {
    path: 'task2/result/gamma-distribution',
    component: GammaDistributionComponent,
    pathMatch: 'full'
  },
  {
    path: 'task2/result/triangle-distribution',
    component: TriangleDistributionComponent,
    pathMatch: 'full'
  },
  {
    path: 'task2/result/simpson-distribution',
    component: SimpsonDistributionComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task2RoutingModule { }
