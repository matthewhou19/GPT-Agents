import { Injectable, inject } from '@angular/core';
import { Agent } from 'src/app/modle/agent';
import { of, Observable, delay, catchError, Subject, tap } from 'rxjs';
import { Message } from 'src/app/modle/Message';
import { Chat } from 'src/app/modle/chat';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env-service.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';
@Injectable()
export class ChatService {
  private chats$: Subject<Chat[]> = new Subject<Chat[]>();
  private backendUrl: string;

  constructor(private http: HttpClient, private envService: EnvService) {
    this.backendUrl = this.envService.get('BACKEND_URL');
    this.refreshChats();
  }

  sendMessage(userMessage: Message): Observable<Message> {
    return of(new Message('example response', 'AI'));
  }

  getChatList(): Observable<Chat[]> {
    this.refreshChats();
    return this.chats$.asObservable();
  }

  reqeustChatList(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.backendUrl + '/api/chats');
  }

  refreshChats(): void {
    this.reqeustChatList().subscribe((chats) => {
      this.chats$.next(chats);
    });
  }

  addChat(agent: Agent): Observable<Chat> {
    return this.http
      .post<Chat>(this.backendUrl + '/api/chats/create', {
        agentId: agent.id,
      })
      .pipe(tap(() => this.refreshChats()));
  }
  getChatById(id: number): Observable<Chat> {
    return this.http.get<Chat>(this.backendUrl + `/api/chats/${id}`);
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
