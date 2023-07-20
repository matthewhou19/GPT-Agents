import { Component, Input } from '@angular/core';
import { Chat } from '../../modle/chat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.css'],
})
export class ChatElementComponent {
  @Input()
  chat: Chat;

  constructor(private router: Router) {}
  openChat() {
    this.router.navigate(['chat-list/chat-board/' + this.chat.id]);
  }
}
