import { Component, Input } from '@angular/core';
import { Chat } from '../modle/chat';
import { AgentsService } from '../services/agents/agents.service';

@Component({
  selector: 'app-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.css'],
})
export class ChatElementComponent {
  @Input()
  chat: Chat;

  constructor() {}
}
