import { Injectable, inject } from '@angular/core';
import { Agent } from '../../modle/agent';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';

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

  getAgentById(id: number): Observable<Agent> {
    return of(this.agents[id]);
  }
}

export const AgentIdResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AgentsService)
    .getAgentById(+route.params['id'])
    .pipe(
      catchError((error) => {
        console.error('Error retrieving data', error);
        return of('No data');
      })
    );
};
