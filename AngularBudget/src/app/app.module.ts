import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddExpenseContainerComponent } from './add-expense-container/add-expense-container.component';
import { AppComponent } from './app.component';
import { BudgetContainerComponent } from './budget-container/budget-container.component';
import { DateFilterComponent } from './date-filter-container/date-filter-container.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MonthFilterContainerComponent } from './month-filter-container/month-filter-container.component';
import { MonthFilterComponent } from './month-filter/month-filter.component';
import { YearFilterContainerComponent } from './year-filter-container/year-filter-container.component';
import { YearFilterComponent } from './year-filter/year-filter.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeaderBarComponent,
    BudgetContainerComponent,
    MonthFilterContainerComponent,
    YearFilterContainerComponent,
    MonthFilterComponent,
    YearFilterComponent,
    DateFilterComponent,
    AddExpenseContainerComponent,
    ExpenseListComponent,
    ExpenseComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
