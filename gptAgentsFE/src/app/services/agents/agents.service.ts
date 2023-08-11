import { Injectable, inject } from '@angular/core';
import { Agent } from '../../modle/agent';
import { Observable, of } from 'rxjs';
import { catchError, Subject, tap } from 'rxjs';
import { EnvService } from '../env-service.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AgentsService {
  private agents$: Subject<Agent[]> = new Subject<Agent[]>();
  private backendUrl: string;
  constructor(private http: HttpClient, private envService: EnvService) {
    this.backendUrl = envService.get('BACKEND_URL');
    this.refreshAgents();
  }

  reqeustAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.backendUrl + '/api/agents');
  }
  refreshAgents(): void {
    this.reqeustAgents().subscribe((agents) => {
      this.agents$.next(agents);
    });
  }

  getAgentUpdates(): Observable<Agent[]> {
    this.refreshAgents();
    return this.agents$.asObservable();
  }

  addAgent(agent: Agent) {
    console.log(agent);
    this.http
      .post(this.backendUrl + '/api/agents/create', agent)

      .pipe(tap(() => this.refreshAgents()))
      .subscribe((response) => {
        console.log(response);
      });
  }

  getAgentById(id: number): Observable<Agent> {
    return this.http.get<Agent>(this.backendUrl + `/api/agents/${id}`);
  }

  updateAgent(id: number, newAgent: Agent) {
    newAgent.id = id;
    this.http
      .put<string>(this.backendUrl + `/api/agents/update`, newAgent)
      .pipe(tap(() => this.refreshAgents()))
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteAgent(id: number) {
    this.http
      .delete(this.backendUrl + `/api/agents/delete/${id}`)
      .pipe(tap(() => this.refreshAgents()))
      .subscribe((data) => {
        console.log(data);
      });
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
