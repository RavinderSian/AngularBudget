import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { IExpenseData } from 'src/app/interfaces/expense.interface';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor() {}

  getExpensesForUser(userId: number): Observable<IExpenseData> {
    return of([
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
      },
    ]).pipe(
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
