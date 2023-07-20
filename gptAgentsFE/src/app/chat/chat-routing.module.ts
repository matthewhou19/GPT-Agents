import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { chatIdResolver } from '../services/chatServices/chat-services.service';
const routes: Routes = [
  {
    path: '',
    component: ChatListComponent,
    children: [
      {
        path: 'chat-board/:id',
        component: ChatboardComponent,
        resolve: { chat: chatIdResolver },
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
