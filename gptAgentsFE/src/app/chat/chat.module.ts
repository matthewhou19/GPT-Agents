import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatElementComponent } from './chat-element/chat-element.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
@NgModule({
  declarations: [ChatboardComponent, ChatListComponent, ChatElementComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ChatRoutingModule,
  ],
})
export class ChatModule {}
