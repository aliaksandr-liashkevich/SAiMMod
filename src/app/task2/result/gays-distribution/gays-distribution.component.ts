import { Component, OnInit } from '@angular/core';
import { DistributionResult, GaysDistribution } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { GaysDistributionService } from '../../shared/services/gays-distribution.service';

@Component({
  selector: 'app-gays-distribution',
  templateUrl: './gays-distribution.component.html',
  styleUrls: ['./gays-distribution.component.scss']
})
export class GaysDistributionComponent implements OnInit {
  public result = new DistributionResult(0, 0, 0, null);

  constructor(
    private route: ActivatedRoute,
    private gaysDistributionService: GaysDistributionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        const { gaysM, gaysQ, gaysN  } = params;

        this.gaysDistributionService.init(new GaysDistribution(+gaysQ, +gaysM, +gaysN));
        this.result = this.gaysDistributionService.getResult();

        console.log(this.result);
      }
    });
  }

}
