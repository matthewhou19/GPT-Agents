export class Chat {
  id?: number;

  roleName: string;
  description: string;
  constructor(role: string, description: string) {
    this.roleName = role;
    this.description = description;
  }
}
