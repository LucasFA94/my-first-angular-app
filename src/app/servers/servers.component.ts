import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-server',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit{

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['TesteServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit(){
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus= "Server was created! Name is "+this.serverName
  }

  onUpdateServerName(event: any) {

    this.serverName = (<HTMLInputElement>event.target).value;

  }


}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

