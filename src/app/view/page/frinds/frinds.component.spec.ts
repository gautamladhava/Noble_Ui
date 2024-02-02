import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrindsComponent } from './frinds.component';

describe('FrindsComponent', () => {
  let component: FrindsComponent;
  let fixture: ComponentFixture<FrindsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrindsComponent]
    });
    fixture = TestBed.createComponent(FrindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
