import { ChatService } from './../services/chatServices/chat-services.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Agent } from '../modle/agent';

@Component({
  selector: 'app-agent-element',
  templateUrl: './agent-element.component.html',
  styleUrls: ['./agent-element.component.css'],
})
export class AgentElementComponent {
  @Input()
  agent: Agent;

  constructor(private chatservice: ChatService) {}
  selectAgent() {
    this.chatservice.agent = this.agent;
    console.log('select agent ' + this.agent.role);
  }
}
