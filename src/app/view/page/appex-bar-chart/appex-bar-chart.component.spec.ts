import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppexBarChartComponent } from './appex-bar-chart.component';

describe('AppexBarChartComponent', () => {
  let component: AppexBarChartComponent;
  let fixture: ComponentFixture<AppexBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppexBarChartComponent]
    });
    fixture = TestBed.createComponent(AppexBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
