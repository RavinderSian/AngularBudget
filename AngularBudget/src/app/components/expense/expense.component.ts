import { Component } from '@angular/core';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent {
  public expense: Expense;

  constructor(expense: Expense) {
    this.expense = expense;
  }
}
