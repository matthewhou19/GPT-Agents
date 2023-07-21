import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Message } from 'src/app/modle/Message';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  requestAllMessage(id: number): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:8080/api/messages/' + id);
  }

  sendMessage(userMessage: Message, id: number): Observable<Message> {
    userMessage.chatId = id;
    //console.log(id);

    return this.http.post<Message>(
      'http://localhost:8080/api/messages',
      userMessage
    );
  }
}
