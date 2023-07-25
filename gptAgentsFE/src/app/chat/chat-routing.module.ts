import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { chatIdResolver } from '../services/chatServices/chat-services.service';
import { ChatComponent } from './chat.component';
const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
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
