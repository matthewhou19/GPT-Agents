import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAgentFormComponent } from './create-agent-form/create-agent-form.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgentIdResolver } from './services/agents/agents.service';

const routes: Routes = [
  { path: 'create-agent', component: CreateAgentFormComponent },
  { path: '', component: AgentListComponent },
  {
    path: 'chat-board/:id',
    component: ChatboardComponent,
    resolve: { agent: AgentIdResolver },
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
