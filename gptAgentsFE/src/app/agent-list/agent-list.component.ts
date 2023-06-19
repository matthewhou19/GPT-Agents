import { Agent } from './../modle/agent';
import { Component, ViewChild, EventEmitter, Output } from '@angular/core';

import { AgentsService } from '../services/agents/agents.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgentListComponent {
  agentLists;

  constructor(private agentService: AgentsService) {
    this.agentLists = agentService.getAgents();
  }
}
