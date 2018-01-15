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
  rows = [
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15]
  ];
}
