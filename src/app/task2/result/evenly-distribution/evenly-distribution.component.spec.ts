import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenlyDistributionComponent } from './evenly-distribution.component';

describe('EvenlyDistributionComponent', () => {
  let component: EvenlyDistributionComponent;
  let fixture: ComponentFixture<EvenlyDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenlyDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenlyDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
