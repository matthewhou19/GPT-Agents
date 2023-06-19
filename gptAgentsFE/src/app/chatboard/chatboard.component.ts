import { Component } from '@angular/core';
import { Agent } from '../modle/agent';
import { ChatService } from '../services/chatServices/chat-services.service';

@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css'],
})
export class ChatboardComponent {
  agent: Agent;
  constructor(chatService: ChatService) {
    this.agent = chatService.viewAgent;
  }
}
