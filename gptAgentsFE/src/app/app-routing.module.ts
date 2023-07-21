import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { CreateAgentFormComponent } from './create-agent-form/create-agent-form.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'create-agent', component: CreateAgentFormComponent },
  { path: '', component: AgentListComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'agent/edit/:id', component: CreateAgentFormComponent },
  {
    path: 'chat-list',
    loadChildren: () => import('./chat/chat.module').then((e) => e.ChatModule),
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
