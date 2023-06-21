import { Component } from '@angular/core';
import { Agent } from '../modle/agent';
import { ChatService } from '../services/chatServices/chat-services.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AgentsService } from '../services/agents/agents.service';

@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css'],
})
export class ChatboardComponent {
  agent: Agent;
  constructor(
    private agentService: AgentsService,
    private route: ActivatedRoute
  ) {
    const params = this.route.snapshot.params;

    this.reactiveHelper(params);

    this.route.params.subscribe((params: Params) => {
      this.reactiveHelper(params);
    });
  }

  private reactiveHelper(params: Params) {
    const id = params['id'] as number;
    const a = this.agentService.getAgentById(id);
    if (a) {
      this.agent = a;
    } else {
      alert('Could not find this agent');
    }
  }
}
