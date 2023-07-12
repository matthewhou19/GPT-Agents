import { Agent } from './../modle/agent';
import {
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';

import { AgentsService } from '../services/agents/agents.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgentListComponent implements OnInit {
  agentLists: Agent[];

  constructor(private agentService: AgentsService) {}
  ngOnInit(): void {
    this.agentService.getAgentUpdates().subscribe((agentUpdates) => {
      this.agentLists = agentUpdates;
    });
  }
}
