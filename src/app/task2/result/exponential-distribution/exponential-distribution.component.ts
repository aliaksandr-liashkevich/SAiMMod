import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExponentialDistributionService } from '../../shared/services/exponential-distribution.service';
import { DistributionResult } from '../../shared/models';
import { ExponentialDistribution } from '../../shared/models';

@Component({
  selector: 'app-exponential-distribution',
  templateUrl: './exponential-distribution.component.html',
  styleUrls: ['./exponential-distribution.component.scss']
})
export class ExponentialDistributionComponent implements OnInit {
  public result = new DistributionResult(0, 0, 0, null);


  constructor(
    private route: ActivatedRoute,
    private exponentialDistributionService: ExponentialDistributionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        const { exponentialL, exponentialXMin, exponentialXMax } = params;

        this.exponentialDistributionService.init(
          new ExponentialDistribution(+exponentialL, +exponentialXMin, +exponentialXMax)
        );

        this.result = this.exponentialDistributionService.getResult();
          
        console.log(this.result);

      }
    });
  }

}
