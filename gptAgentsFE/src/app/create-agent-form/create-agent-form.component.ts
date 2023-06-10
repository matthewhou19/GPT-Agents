import { Component } from '@angular/core';
import { Agent } from '../modle/agent';

@Component({
  selector: 'app-create-agent-form',
  templateUrl: './create-agent-form.component.html',
  styleUrls: ['./create-agent-form.component.css'],
})
export class CreateAgentFormComponent {
  agentRole = "such as 'translator'";
  agentDescription = "SUCH AS 'tranlate english paragraphs to Chinesse'";
  onAddAgent() {}
}
