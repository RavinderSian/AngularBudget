import { Component } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent {
  public service: ExpenseService;

  constructor(service: ExpenseService) {
    this.service = service;
  }
}
