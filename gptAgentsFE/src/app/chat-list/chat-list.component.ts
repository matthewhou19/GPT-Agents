import { Component } from '@angular/core';
import { Chat } from '../modle/chat';
import { ChatService } from '../services/chatServices/chat-services.service';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent {
  chatList: Chat[];

  constructor(private chatService: ChatService) {
    this.chatList = chatService.getChatList();
  }
}
