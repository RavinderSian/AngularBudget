import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'year-filter',
  templateUrl: './year-filter.component.html',
  styleUrls: ['./year-filter.component.css'],
})
export class YearFilterComponent implements OnInit {
  currentYear!: number;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
