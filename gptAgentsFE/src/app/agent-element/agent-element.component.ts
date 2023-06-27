import { ChatService } from './../services/chatServices/chat-services.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Agent } from '../modle/agent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-element',
  templateUrl: './agent-element.component.html',
  styleUrls: ['./agent-element.component.css'],
})
export class AgentElementComponent {
  @Input()
  agent: Agent;

  constructor(private chatservice: ChatService, private router: Router) {}
  selectAgent() {
    this.router.navigate(['chat-board/' + this.agent.id]);
  }
}
