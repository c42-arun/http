import { Component } from '@angular/core';
import { ServersService } from 'app/servers.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serversService: ServersService) {
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onAppend() {
    this.serversService.appendServers(this.servers).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onUpdate() {
    this.serversService.updateServers(this.servers).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onGet() {
    this.serversService.getServers().subscribe(
      (servers: any[]) => {
        console.log(servers);
        this.servers = servers;
      },
      (error: Error) => console.log(error)
    );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
