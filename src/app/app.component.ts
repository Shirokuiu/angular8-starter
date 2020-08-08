import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './modules/websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  connectStatus = 'Не подключено';

  constructor(private readonly websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.on('USER').subscribe((evt) => {
      this.connectStatus = 'Подключено';
    });

    this.websocketService.onDisconnect().subscribe(() => {
      this.connectStatus = 'Не подключено';
    });
  }
}
