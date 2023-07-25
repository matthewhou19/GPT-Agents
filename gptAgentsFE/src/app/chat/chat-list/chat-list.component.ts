import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chat } from '../../modle/chat';
import { ChatService } from '../../services/chatServices/chat-services.service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit, OnDestroy {
  chatList: Chat[];
  routerSubscription: Subscription;
  constructor(private chatService: ChatService, private router: Router) {}

  ngOnInit(): void {
    this.fetchChatList();
    this.routerSubscription = this.router.events.subscribe((event) => {
      // Check if navigation has completed
      if (event instanceof NavigationEnd) {
        this.fetchChatList();
      }
    });
  }

  fetchChatList() {
    this.chatService.getChatList().subscribe((chatList) => {
      this.chatList = chatList;
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
