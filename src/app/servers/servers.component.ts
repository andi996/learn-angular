import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // can use like this, but need to change called of the component in app.component.html
  // selector: '[app-servers]',
  // selector: ".app-servers",
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName: string = 'TestServer';
  username: string = '';
  servers = ['TestServer 1'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    let input = (<HTMLInputElement>event.target).value;
    this.serverName = input;
  }
}
