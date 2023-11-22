import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearFilterContainerComponent } from './year-filter-container.component';

describe('YearFilterContainerComponent', () => {
  let component: YearFilterContainerComponent;
  let fixture: ComponentFixture<YearFilterContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearFilterContainerComponent]
    });
    fixture = TestBed.createComponent(YearFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
