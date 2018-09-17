import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaDistributionComponent } from './gamma-distribution.component';

describe('GammaDistributionComponent', () => {
  let component: GammaDistributionComponent;
  let fixture: ComponentFixture<GammaDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammaDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammaDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
