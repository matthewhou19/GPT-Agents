import { ChatService } from './../services/chatServices/chat-services.service';
import { Component, OnInit } from '@angular/core';
import { Agent } from '../modle/agent';
import { ActivatedRoute, Params } from '@angular/router';
import { AgentsService } from '../services/agents/agents.service';
import { Massage } from '../modle/Massage';
import { timeout, catchError, of } from 'rxjs';
@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css'],
})
export class ChatboardComponent implements OnInit {
  agent: Agent;

  public messages: Massage[] = [];
  public inputMessage: string = '';
  public isSending: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.agent = data['agent'];
    });
  }

  sendMessage() {
    console.log(this.inputMessage);
    this.messages.push(new Massage(this.inputMessage, 'user'));
    this.isSending = true;
    this.chatService
      .sendMessage(new Massage(this.inputMessage, 'user'))
      .pipe(
        timeout(2000),
        catchError((error) => {
          console.log(error);
          return of(new Massage('timeout error', 'openAi'));
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
