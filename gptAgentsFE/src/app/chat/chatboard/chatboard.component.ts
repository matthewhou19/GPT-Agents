import { ChatService } from '.././../services/chatServices/chat-services.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { MessageService } from 'src/app/services/MessageService/message-service.service';
import { Message } from '../../modle/Message';
import { timeout, catchError, of } from 'rxjs';
import { Chat } from '../../modle/chat';
@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css'],
})
export class ChatboardComponent implements OnInit {
  chat: Chat;

  public messages: Message[] = [];
  public inputMessage: string = '';
  public isSending: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private messagesService: MessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.chat = data['chat'];
      this.chat.id = data['chat'].id;
      //console.log(data['chat'].id);

      this.messagesService
        .requestAllMessage(data['chat'].id)
        .subscribe((messagesBack) => {
          this.messages = messagesBack;

          console.log(messagesBack);
        });
    });
  }

  sendMessage() {
    console.log(this.inputMessage);
    this.messages.push(new Message(this.inputMessage, 'USER'));
    this.isSending = true;
    console.log(this.chat.id);
    this.messagesService
      .sendMessage(new Message(this.inputMessage, 'USER'), this.chat.id!)
      .pipe(
        timeout(20000),
        catchError((error) => {
          console.log(error);
          return of(new Message(error, 'AI'));
        })
      )
      .subscribe({
        next: (response) => {
          this.isSending = false;
          this.messages.push(response);
          this.inputMessage = '';
        },
      });
  }
}
