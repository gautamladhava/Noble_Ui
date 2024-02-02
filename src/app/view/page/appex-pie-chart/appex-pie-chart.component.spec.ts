import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppexPieChartComponent } from './appex-pie-chart.component';

describe('AppexPieChartComponent', () => {
  let component: AppexPieChartComponent;
  let fixture: ComponentFixture<AppexPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppexPieChartComponent]
    });
    fixture = TestBed.createComponent(AppexPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
