import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-filter',
  templateUrl: './month-filter.component.html',
  styleUrls: ['./month-filter.component.css'],
})
export class MonthFilterComponent implements OnInit {
  currentYear!: number;

  constructor() {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
