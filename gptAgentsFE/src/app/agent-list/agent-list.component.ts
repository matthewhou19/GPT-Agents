import { Component } from '@angular/core';
import { Agent } from '../modle/agent';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgentListComponent {
  agentLists = [{ role: 'testRole', description: 'test description' }];

  addAgent(agent: Agent): void {
    this.agentLists.push(agent);
  }
}
