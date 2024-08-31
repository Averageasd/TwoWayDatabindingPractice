import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'TwoWayBinding';
  username: string = '';
  constructor() {}
  ngOnInit(): void {}

  onCanReset() {
    return this.username.trim().length === 0;
  }

  onResetForm() {
    this.username = '';
  }
}
