import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaysDistributionComponent } from './gays-distribution.component';

describe('GaysDistributionComponent', () => {
  let component: GaysDistributionComponent;
  let fixture: ComponentFixture<GaysDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaysDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaysDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
