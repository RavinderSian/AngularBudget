import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthFilterContainerComponent } from './month-filter-container.component';

describe('MonthFilterContainerComponent', () => {
  let component: MonthFilterContainerComponent;
  let fixture: ComponentFixture<MonthFilterContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthFilterContainerComponent]
    });
    fixture = TestBed.createComponent(MonthFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
