import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'condition-component',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css'],
})
export class ConditionComponent implements OnInit {
  serverName: string = '';
  serverCreated: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
  }
}
