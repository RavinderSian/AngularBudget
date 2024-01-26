import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
  @Input() expense!: Expense;

  constructor() {}

  ngOnInit(): void {}
}
