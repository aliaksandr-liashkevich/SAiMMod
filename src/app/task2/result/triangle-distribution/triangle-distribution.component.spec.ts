import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleDistributionComponent } from './triangle-distribution.component';

describe('TriangleDistributionComponent', () => {
  let component: TriangleDistributionComponent;
  let fixture: ComponentFixture<TriangleDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangleDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
