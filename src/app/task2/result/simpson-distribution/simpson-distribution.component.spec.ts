import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonDistributionComponent } from './simpson-distribution.component';

describe('SimpsonDistributionComponent', () => {
  let component: SimpsonDistributionComponent;
  let fixture: ComponentFixture<SimpsonDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpsonDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpsonDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
