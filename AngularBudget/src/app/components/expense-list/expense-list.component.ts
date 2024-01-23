import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  public service: ExpenseService;
  private subscriptions$ = new Subscription();
  public expensesForUser$: Observable<Expense>;

  constructor(service: ExpenseService, expensesForUser$: Observable<Expense>) {
    this.service = service;
    this.expensesForUser$ = expensesForUser$;
  }
  ngOnInit(): void {
    this.expensesForUser$ = this.service.getExpensesForUser(1);

    this.subscriptions$.add(
      this.expensesForUser$.subscribe((data) => {
        console.log(data);
      })
    );
  }
}
