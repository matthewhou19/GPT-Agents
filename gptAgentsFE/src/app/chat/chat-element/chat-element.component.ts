import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../../modle/chat';

import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.css'],
})
export class ChatElementComponent implements OnInit {
  @Input()
  chat: Chat;
  activeChatId: number;
  constructor(private router: Router) {}
  openChat() {
    this.router.navigate(['chat-list/chat-board/' + this.chat.id]);
  }
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): event is NavigationEnd =>
            event instanceof NavigationEnd && event.id !== 1
        )
      )
      .subscribe({
        next: (next: NavigationEnd) => {
          const parts = next.url.split('/');
          this.activeChatId = +parts[parts.length - 1];
        },
      });
  }
}
