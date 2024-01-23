import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListHeaderComponent } from './expense-list-header.component';

describe('ExpenseListHeaderComponent', () => {
  let component: ExpenseListHeaderComponent;
  let fixture: ComponentFixture<ExpenseListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseListHeaderComponent]
    });
    fixture = TestBed.createComponent(ExpenseListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
