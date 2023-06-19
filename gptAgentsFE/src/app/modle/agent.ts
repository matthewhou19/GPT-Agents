export class Agent {
  role: string;
  description: string;
  constructor(role: string, description: string) {
    this.description = description;
    this.role = role;
  }

  static copy(agent1: Agent, agent2: Agent) {
    agent1.role = agent2.role;
    agent1.description = agent2.description;
  }
}
