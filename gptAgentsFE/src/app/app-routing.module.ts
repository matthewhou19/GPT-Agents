import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAgentFormComponent } from './create-agent-form/create-agent-form.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { ChatboardComponent } from './chatboard/chatboard.component';

const routes: Routes = [
  { path: 'create-agent', component: CreateAgentFormComponent },
  { path: '', component: AgentListComponent },
  { path: 'chat-board/:id', component: ChatboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
