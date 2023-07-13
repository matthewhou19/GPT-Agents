import { Injectable, inject } from '@angular/core';
import { Agent } from 'src/app/modle/agent';
import { of, Observable, delay, catchError, Subject, tap } from 'rxjs';
import { Massage } from 'src/app/modle/Massage';
import { Chat } from 'src/app/modle/chat';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';
@Injectable()
export class ChatService {
  private chats$: Subject<Chat[]> = new Subject<Chat[]>();
  constructor(private http: HttpClient) {
    this.refreshChats();
  }

  sendMessage(userMessage: Massage): Observable<Massage> {
    return of(new Massage('example response', 'openAi'));
  }

  getChatList(): Observable<Chat[]> {
    return this.chats$.asObservable();
  }

  reqeustChatList(): Observable<Chat[]> {
    return this.http.get<Chat[]>('http://localhost:8080/api/chats');
  }

  refreshChats(): void {
    this.reqeustChatList().subscribe((chats) => {
      this.chats$.next(chats);
    });
  }

  addChat(agent: Agent): Observable<Chat> {
    return this.http
      .post<Chat>('http://localhost:8080/api/chats/create', {
        agentId: agent.id,
      })
      .pipe(tap(() => this.refreshChats()));
  }
  getChatById(id: number): Observable<Chat> {
    return this.http.get<Chat>(`http://localhost:8080/api/chats/${id}`);
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
