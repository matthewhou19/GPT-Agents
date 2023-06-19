import { Injectable } from '@angular/core';
import { Agent } from 'src/app/modle/agent';

@Injectable()
export class ChatService {
  currentAgent = new Agent('TEST FOR CHAT', 'TEST FOR CHAT DES');
  currentViewAgent = this.currentAgent;
  constructor() {}
  set agent(agent: Agent) {
    this.currentAgent = agent;
    Agent.copy(this.currentViewAgent, this.currentAgent);
  }
  get agent() {
    return this.currentAgent;
  }
  get viewAgent() {
    return this.currentViewAgent;
  }
}
