import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramTableComponent } from './histogram-table.component';

describe('HistogramTableComponent', () => {
  let component: HistogramTableComponent;
  let fixture: ComponentFixture<HistogramTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistogramTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
