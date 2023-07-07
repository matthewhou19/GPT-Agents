import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAgentFormComponent } from './create-agent-form/create-agent-form.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentElementComponent } from './agent-element/agent-element.component';
import { FormsModule } from '@angular/forms';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { AgentsService } from './services/agents/agents.service';
import { ChatService } from './services/chatServices/chat-services.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatElementComponent } from './chat-element/chat-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAgentFormComponent,
    AgentListComponent,
    AgentElementComponent,
    ChatboardComponent,
    PageNotFoundComponent,
    ChatListComponent,
    ChatElementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [AgentsService, ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
