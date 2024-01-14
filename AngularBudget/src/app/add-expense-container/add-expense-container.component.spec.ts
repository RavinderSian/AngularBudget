import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseContainerComponent } from './add-expense-container.component';

describe('AddExpenseContainerComponent', () => {
  let component: AddExpenseContainerComponent;
  let fixture: ComponentFixture<AddExpenseContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExpenseContainerComponent]
    });
    fixture = TestBed.createComponent(AddExpenseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
