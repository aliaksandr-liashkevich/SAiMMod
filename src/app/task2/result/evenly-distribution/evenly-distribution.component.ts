import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenlyDistributionService } from '../../shared/services/evenly-distribution.service';
import { EvenlyDistributionResult, EvenlyDistribution } from '../../shared/models';

@Component({
  selector: 'app-evenly-distribution',
  templateUrl: './evenly-distribution.component.html',
  styleUrls: ['./evenly-distribution.component.scss']
})
export class EvenlyDistributionComponent implements OnInit {
  public result = new EvenlyDistributionResult(0, 0, 0);

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

        console.log(this.result);
      }
    });
  }

}
