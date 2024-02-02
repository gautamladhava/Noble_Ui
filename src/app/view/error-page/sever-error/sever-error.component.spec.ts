import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverErrorComponent } from './sever-error.component';

describe('SeverErrorComponent', () => {
  let component: SeverErrorComponent;
  let fixture: ComponentFixture<SeverErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeverErrorComponent]
    });
    fixture = TestBed.createComponent(SeverErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
