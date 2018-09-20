import { Component, OnInit } from '@angular/core';
import { DistributionResult } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { TriangleDistributionService } from '../../shared/services/triangle-distribution.service';
import { TriangleDistribution } from '../../shared/models/triangle-distribution';

@Component({
  selector: 'app-triangle-distribution',
  templateUrl: './triangle-distribution.component.html',
  styleUrls: ['./triangle-distribution.component.scss']
})
export class TriangleDistributionComponent implements OnInit {
  public result = new DistributionResult(0, 0, 0, null);

  constructor(
    private route: ActivatedRoute,
    private gaysDistributionService: TriangleDistributionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        const { a, b  } = params;

        this.gaysDistributionService.init(new TriangleDistribution(+a, +b));
        this.result = this.gaysDistributionService.getResult();

        console.log(this.result);
      }
    });
  }

}
