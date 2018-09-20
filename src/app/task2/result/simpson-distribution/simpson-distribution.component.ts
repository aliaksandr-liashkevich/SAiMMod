import { Component, OnInit } from '@angular/core';
import { DistributionResult } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { SimpsonDistribution } from '../../shared/models/simpson-distribution';
import { SimpsonDistributionService } from '../../shared/services/simpson-distribution.service';

@Component({
  selector: 'app-simpson-distribution',
  templateUrl: './simpson-distribution.component.html',
  styleUrls: ['./simpson-distribution.component.scss']
})
export class SimpsonDistributionComponent implements OnInit {
  public result = new DistributionResult(0, 0, 0, null);

  constructor(
    private route: ActivatedRoute,
    private service: SimpsonDistributionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        const { a, b  } = params;

        this.service.init(new SimpsonDistribution(+a, +b));
        this.result = this.service.getResult();

        console.log(this.result);
      }
    });
  }

}
