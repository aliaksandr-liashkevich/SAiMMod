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
  public result = new LemerResult(null, null, 0, 0, 0);

  constructor(
    private generatorService: GeneratorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params) {
          const { n, m, x0, a } = params;
          const values = new Lemer(+n, +m, +x0, +a);

          this.generatorService.init(values);
          this.result = this.generatorService.getResult();
          console.log(this.result);
        }
      });
  }

}
