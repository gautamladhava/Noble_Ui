import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePageComponent } from './timeline-page.component';

describe('TimelinePageComponent', () => {
  let component: TimelinePageComponent;
  let fixture: ComponentFixture<TimelinePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelinePageComponent]
    });
    fixture = TestBed.createComponent(TimelinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
