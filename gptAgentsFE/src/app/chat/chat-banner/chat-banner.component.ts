import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SmChatListComponent } from '../sm-chat-list/sm-chat-list.component';

@Component({
  selector: 'app-chat-banner',
  templateUrl: './chat-banner.component.html',
  styleUrls: ['./chat-banner.component.css'],
})
export class ChatBannerComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  listShown: boolean = false;

  constructor() {}
  getChatList() {
    this.createDynamicComponent();
  }
  createDynamicComponent() {
    this.container.clear();
    this.container.createComponent<SmChatListComponent>(SmChatListComponent);
    // Get the component factory for the DynamicComponent
    this.listShown = true;
  }
  closeList() {
    this.container.clear();
    this.listShown = false;
  }
}
