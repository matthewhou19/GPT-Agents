import { Component, ViewChild } from '@angular/core';
import { Agent } from './modle/agent';
import { AgentListComponent } from './agent-list/agent-list.component';
import { ChatboardComponent } from './chatboard/chatboard.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gptAgentsFE';

  @ViewChild(AgentListComponent) agentList!: AgentListComponent;
  @ViewChild(ChatboardComponent) chatboard!: ChatboardComponent;

  onOpenChat(data: Agent) {
    this.chatboard.agent = data;
  }
}
