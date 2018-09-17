import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentialDistributionComponent } from './exponential-distribution.component';

describe('ExponentialDistributionComponent', () => {
  let component: ExponentialDistributionComponent;
  let fixture: ComponentFixture<ExponentialDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExponentialDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponentialDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
