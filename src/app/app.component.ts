import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  columns = [{ type: 'string', name: 'day' }, { type: 'number', name: 'tue' },
  { type: 'number', name: 'wed' }, { type: 'number', name: 'thu' }, { type: 'number', name: 'thu' }];
  // rows = [
  //   ['Mon', 20, 28, 38, 45],
  //   ['Tue', 31, 38, 55, 66],
  //   ['Wed', 50, 55, 77, 80],
  //   ['Thu', 77, 77, 66, 50],
  //   ['Fri', 68, 66, 22, 15]
  // ];
  rows = [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ];

  options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    // bars: 'horizontal' // Required for Material Bar Charts.
  };
}
