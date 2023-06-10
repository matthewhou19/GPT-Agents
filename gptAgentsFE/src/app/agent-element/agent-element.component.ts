import { Component, Input } from '@angular/core';
import { Agent } from '../modle/agent';

@Component({
  selector: 'app-agent-element',
  templateUrl: './agent-element.component.html',
  styleUrls: ['./agent-element.component.css'],
})
export class AgentElementComponent {
  @Input()
  agent: Agent;
  constructor() {}
}
