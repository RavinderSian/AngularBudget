import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense } from 'src/app/models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  getExpensesForUser(userId: number): Observable<Expense[]> {
    let expense = {
      year: 2024,
      month: 1,
    };

    console.log(expense);

    return this.httpClient
      .post('/api/expenseformonth', expense, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + btoa('rsian:test'),
          ContentType: 'application/json',
        }),
      })
      .pipe(
        map((expenses: any) => {
          return expenses;
        })
      );
  }
}
