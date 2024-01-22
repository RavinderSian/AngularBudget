import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  public service: ExpenseService;
  private subscriptions$ = new Subscription();
  public expensesForUser$: Observable<any>;

  constructor(service: ExpenseService) {
    this.service = service;
    this.expensesForUser$ = of(1, 2, 3, 4, 5);
  }
  ngOnInit(): void {}
}
