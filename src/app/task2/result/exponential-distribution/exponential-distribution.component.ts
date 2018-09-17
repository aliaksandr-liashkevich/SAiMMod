import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExponentialDistributionService } from '../../shared/services/exponential-distribution.service';
import { ExponentialDistributionResult } from '../../shared/models/exponensial-distribution-result';
import { ExponentialDistribution } from '../../shared/models';

@Component({
  selector: 'app-exponential-distribution',
  templateUrl: './exponential-distribution.component.html',
  styleUrls: ['./exponential-distribution.component.scss']
})
export class ExponentialDistributionComponent implements OnInit {
  public result = new ExponentialDistributionResult(0, 0, 0);


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
