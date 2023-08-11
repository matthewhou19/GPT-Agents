import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Message } from 'src/app/modle/Message';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env-service.service';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private backendUrl: string;
  constructor(private http: HttpClient, private envService: EnvService) {
    this.backendUrl = this.envService.get('BACKEND_URL');
  }

  requestAllMessage(id: number): Observable<Message[]> {
    return this.http.get<Message[]>(this.backendUrl + '/api/messages/' + id);
  }

  sendMessage(userMessage: Message, id: number): Observable<any> {
    userMessage.chatId = id;
    //console.log(id);

    return this.http.post(this.backendUrl + '/api/messages', userMessage);
  }
}
