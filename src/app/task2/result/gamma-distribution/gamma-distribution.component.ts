import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistributionResult, GammaDistribution } from '../../shared/models';
import { GammaDistributionService } from '../../shared/services';

@Component({
  selector: 'app-gamma-distribution',
  templateUrl: './gamma-distribution.component.html',
  styleUrls: ['./gamma-distribution.component.scss']
})
export class GammaDistributionComponent implements OnInit {
  public result = new DistributionResult(0, 0, 0, null);

  constructor(
    private route: ActivatedRoute,
    private gammaDistributionService: GammaDistributionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        const { gammaL, gammaN, gammaXMin, gammaXMax } = params;

        this.gammaDistributionService.init(
          new GammaDistribution(+gammaL, +gammaN, +gammaXMin, +gammaXMax)
        );

        this.result = this.gammaDistributionService.getResult();
          
        console.log(this.result);
      }
    });
  }

}
