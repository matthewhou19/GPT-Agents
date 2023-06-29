import { Injectable } from '@angular/core';
import { Agent } from 'src/app/modle/agent';
import { of, Observable, delay } from 'rxjs';
import { Massage } from 'src/app/modle/Massage';

@Injectable()
export class ChatService {
  constructor() {}
  sendMessage(userMessage: Massage): Observable<Massage> {
    return of(new Massage('example response', 'openAi'));
  }
}
