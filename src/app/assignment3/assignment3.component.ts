import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component implements OnInit {
  secretPasswords: string = 'Tuna';
  showSecret: boolean = false;
  logClicked = [];

  constructor() {}

  ngOnInit(): void {}

  onClickDisplay() {
    this.showSecret = !this.showSecret;
    // this.logClicked.push(this.logClicked.length);
    this.logClicked.push(new Date());
  }
}
