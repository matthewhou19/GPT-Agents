import { Injectable, inject } from '@angular/core';
import { Agent } from 'src/app/modle/agent';
import { of, Observable, delay, catchError } from 'rxjs';
import { Massage } from 'src/app/modle/Massage';
import { Chat } from 'src/app/modle/chat';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';
@Injectable()
export class ChatService {
  chats: [Chat] = [{ agentId: 0, role: 'testRole in service' }];
  constructor() {}
  sendMessage(userMessage: Massage): Observable<Massage> {
    return of(new Massage('example response', 'openAi'));
  }

  getChatList() {
    return this.chats;
  }
  addChat(agent: Agent) {
    const chat = new Chat(agent.id!, agent.role);
    chat.id = this.chats.length;
    this.chats.push(chat);
    return chat.id;
  }
  getChatById(id: number): Observable<Chat> {
    return of(this.chats[id]);
  }
}

export const chatIdResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(ChatService)
    .getChatById(+route.params['id'])
    .pipe(
      catchError((error) => {
        console.error('Error retrieving data', error);
        return of('No data');
      })
    );
};
