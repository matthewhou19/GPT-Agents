import { Injectable } from '@angular/core';
import { Agent } from '../../modle/agent';

@Injectable()
export class AgentsService {
  agents: [Agent] = [
    { role: 'testRole in service', description: 'test description in service' },
  ];

  constructor() {}
  addAgent(agent: Agent) {
    this.agents.push(agent);
  }

  getAgents() {
    return this.agents;
  }
}
