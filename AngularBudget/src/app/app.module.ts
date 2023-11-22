import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { BudgetContainerComponent } from './budget-container/budget-container.component';
import { MonthFilterContainerComponent } from './month-filter-container/month-filter-container.component';
import { YearFilterContainerComponent } from './year-filter-container/year-filter-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    BudgetListComponent,
    BudgetListComponent,
    HeaderBarComponent,
    BudgetContainerComponent,
    MonthFilterContainerComponent,
    YearFilterContainerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
