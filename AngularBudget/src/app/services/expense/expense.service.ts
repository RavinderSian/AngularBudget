import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IExpenseData } from 'src/app/interfaces/expense.interface';
import { Expense } from 'src/app/models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  getExpensesForUser(userId: number): Observable<Expense> {
    let expense = {
      year: 2024,
      month: 1,
    };

    console.log(expense);

    this.httpClient
      .post('/api/expenseformonth', expense, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + btoa('rsian:test'),
          ContentType: 'application/json',
        }),
      })
      .pipe(
        map((expense: any) => {
          return <IExpenseData>{
            id: expense.id,
            userId: expense.userId,
            category: expense.category,
            amount: expense.amount,
            description: expense.description,
            purchaseDate: expense.purchaseDate,
          };
        })
      )
      .subscribe((response) => {
        console.log(response);
      });

    return of(
      {
        id: 1,
        userId: 1,
        category: 'TRAVEL',
        amount: 10.5,
        description: 'Travel',
        purchaseDate: new Date(),
      },
      {
        id: 1,
        userId: 1,
        category: 'DIRECT_DEBITS',
        amount: 10.5,
        description: 'Travel',
        purchaseDate: new Date(),
      },
      {
        id: 2,
        userId: 1,
        category: 'FUEL',
        amount: 10.5,
        description: 'Travel',
        purchaseDate: new Date(),
      }
    ).pipe(
      map((expense: any) => {
        return <IExpenseData>{
          id: expense.id,
          userId: expense.userId,
          category: expense.category,
          amount: expense.amount,
          description: expense.description,
          purchaseDate: expense.purchaseDate,
        };
      })
    );
  }
}
