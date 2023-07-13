import { AgentsService } from './../services/agents/agents.service';
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

  constructor(
    private chatservice: ChatService,
    private router: Router,
    private agentService: AgentsService
  ) {}
  async selectAgent() {
    this.chatservice.addChat(this.agent).subscribe((chat) => {
      this.router.navigate(['chat-list/chat-board/' + chat.id]);
    });
  }

  editAgent() {
    this.router.navigate(['agent/edit/' + this.agent.id]);
  }
  deleteAgent() {
    this.agentService.deleteAgent(this.agent.id!);
  }
}
