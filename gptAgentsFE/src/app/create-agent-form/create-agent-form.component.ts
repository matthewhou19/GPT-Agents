import { Component } from '@angular/core';
import { Agent } from '../modle/agent';
import { AgentsService } from '../services/agents/agents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-agent-form',
  templateUrl: './create-agent-form.component.html',
  styleUrls: ['./create-agent-form.component.css'],
})
export class CreateAgentFormComponent {
  agentRole = "such as 'translator'";
  agentDescription = "SUCH AS 'tranlate english paragraphs to Chinesse'";

  constructor(private agentService: AgentsService, private router: Router) {}

  onAddAgent() {
    this.agentService.addAgent({
      role: this.agentRole,
      description: this.agentDescription,
    });
    this.router.navigate(['']);
  }
}
