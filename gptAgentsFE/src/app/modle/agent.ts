export class Agent {
  id?: number;
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

  static createFromObj(o: { role: string; description: string }): Agent {
    return new Agent(o.role, o.description);
  }
}
