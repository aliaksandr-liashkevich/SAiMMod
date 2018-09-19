import { Component, OnInit, Input } from '@angular/core';
import { DistributionResult } from '../../shared/models';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-histogram-table',
  templateUrl: './histogram-table.component.html',
  styleUrls: ['./histogram-table.component.scss']
})
export class HistogramTableComponent implements OnInit {
  @Input()
  public result: DistributionResult = null;
  public inderectTestResult = Math.PI / 4;
  single: any[];
  view: any[] = [1200, 600];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

}
