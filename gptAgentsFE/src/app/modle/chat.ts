export class Chat {
  id?: number;
  agentId: number;
  role: string;
  constructor(agentId: number, role: string) {
    this.agentId = agentId;
    this.role = role;
  }
}
