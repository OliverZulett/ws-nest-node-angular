import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMessage: string = '';
  messageList:  string[] = [];

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log('Message resp: ', message);
        
        this.messageList.push(message);
      });
  }
}