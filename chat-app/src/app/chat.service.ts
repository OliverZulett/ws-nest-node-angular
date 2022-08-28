import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('new-message', msg);
  }

  getMessage() {
    return this.socket.fromEvent('new-message').pipe(map((msg) => msg));
  }

  public getMessages = () => {
    return Observable.create((observer: any) => {
      this.socket.on('response', (message: string) => {
        observer.next(message);
      });
    });
  };

  sendFile(fileObject: any) {
    this.socket.emit('new-file', fileObject, (status: any) => {
      console.log(status)
    });
  }
}
