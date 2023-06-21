import { Injectable } from '@angular/core';
import { Agent } from '../../modle/agent';

@Injectable()
export class AgentsService {
  agents: [Agent] = [
    {
      id: 0,
      role: 'testRole in service',
      description: 'test description in service',
    },
  ];

  constructor() {}
  addAgent(agent: Agent) {
    agent.id = (this.agents[this.agents.length - 1].id as number) + 1;
    this.agents.push(agent);
  }

  getAgents() {
    return this.agents;
  }

  getAgentById(id: number) {
    if (id >= this.agents.length) return undefined;
    return this.agents[id];
  }
}
