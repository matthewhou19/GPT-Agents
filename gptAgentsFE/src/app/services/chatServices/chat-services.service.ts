import { Injectable } from '@angular/core';
import { Agent } from 'src/app/modle/agent';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ChatService {
  private messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );
  private userInput: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}
}
