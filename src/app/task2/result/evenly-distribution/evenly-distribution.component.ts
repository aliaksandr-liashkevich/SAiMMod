import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenlyDistributionService } from '../../shared/services/evenly-distribution.service';
import { DistributionResult, EvenlyDistribution } from '../../shared/models';

@Component({
  selector: 'app-evenly-distribution',
  templateUrl: './evenly-distribution.component.html',
  styleUrls: ['./evenly-distribution.component.scss']
})
export class EvenlyDistributionComponent implements OnInit {
  public result = new DistributionResult(0, 0, 0, null);

  constructor(
    private route: ActivatedRoute,
    private evenlyDistributionService: EvenlyDistributionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        const { evenlyA, evenlyB } = params;

        this.evenlyDistributionService.init(new EvenlyDistribution(+evenlyA, +evenlyB));
        this.result = this.evenlyDistributionService.getResult();
        this.result.histogram.yScaleMax = 0.01;
        this.result.histogram.yScaleMin = 0;

        console.log(this.result);
      }
    });
  }

}
