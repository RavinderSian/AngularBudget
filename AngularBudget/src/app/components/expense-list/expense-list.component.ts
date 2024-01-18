import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IExpenseData } from 'src/app/interfaces/expense.interface';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  public service: ExpenseService;
  private subscriptions$ = new Subscription();
  public expensesForUser$ = Observable<IExpenseData>;

  constructor(service: ExpenseService) {
    this.service = service;
  }
  ngOnInit(): void {
    this.expensesForUser$ = this.service.getExpensesForUser(1);
  }
}
