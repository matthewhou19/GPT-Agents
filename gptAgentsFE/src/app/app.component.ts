import { Component, ViewChild } from '@angular/core';
import { Agent } from './modle/agent';
import { AgentListComponent } from './agent-list/agent-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gptAgentsFE';

  @ViewChild(AgentListComponent) agentList!: AgentListComponent;

  onAgentCreated(data: Agent) {
    this.agentList.addAgent(data);
  }
}
