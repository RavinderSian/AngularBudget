import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddExpenseContainerComponent } from './components/add-expense-container/add-expense-container.component';
import { BudgetContainerComponent } from './components/budget-container/budget-container.component';
import { DateFilterComponent } from './components/date-filter-container/date-filter-container.component';
import { ExpenseListHeaderComponent } from './components/expense-list-header/expense-list-header.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { MonthFilterContainerComponent } from './components/month-filter-container/month-filter-container.component';
import { MonthFilterComponent } from './components/month-filter/month-filter.component';
import { YearFilterContainerComponent } from './components/year-filter-container/year-filter-container.component';
import { YearFilterComponent } from './components/year-filter/year-filter.component';
import { ExpenseService } from './services/expense/expense.service';

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
    ExpenseListHeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [ExpenseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
