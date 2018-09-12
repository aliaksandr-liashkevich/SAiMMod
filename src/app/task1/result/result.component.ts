import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneratorService } from '../shared/services';
import { Lemer, LemerResult } from '../shared/models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public result = new LemerResult(null, null, 0, 0, 0, null, 0, 0);
  single: any[];
  view: any[] = [700, 400];
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
  yScaleMax = 0.055;
  yScaleMin = 0.046;

  constructor(
    private generatorService: GeneratorService,
    private route: ActivatedRoute
  ) 
  {
    Object.assign(this, { single: [] });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params) {
          const { n, m, x0, a } = params;
          const values = new Lemer(+n, +m, +x0, +a);

          this.generatorService.init(values);
          this.result = this.generatorService.getResult();
          console.log(this.result);

          this.yScaleMax = this.result.yScaleMax;
          this.yScaleMin = this.result.yScaleMin - 0.005;

          Object.assign(this, { single: this.result.cNumbers.map(function(c){
            return {
              value: c,
              name: c.toString()
            };
          }) })
        }
      });
  }

  onSelect(event) {
    console.log(event);
  }
}
