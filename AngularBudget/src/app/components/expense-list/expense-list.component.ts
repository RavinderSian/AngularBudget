import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  public service: ExpenseService;
  private subscriptions$ = new Subscription();
  public expensesForUser$!: Observable<Expense[]>;
  public expenseList: Expense[] = [];

  constructor(service: ExpenseService) {
    this.service = service;
  }
  ngOnInit(): void {
    this.expensesForUser$ = this.service.getExpensesForUser(1);

    this.subscriptions$.add(
      this.expensesForUser$.subscribe((data) => {
        this.expenseList = data;
      })
    );
  }
}
