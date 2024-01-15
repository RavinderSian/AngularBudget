import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'month-filter',
  templateUrl: './month-filter.component.html',
  styleUrls: ['./month-filter.component.css'],
})
export class MonthFilterComponent implements OnInit {
  currentMonth!: String;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {}

  ngOnInit(): void {
    this.currentMonth = this.months[new Date().getMonth()];
  }
}
