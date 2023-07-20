import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAgentFormComponent } from './create-agent-form/create-agent-form.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentElementComponent } from './agent-element/agent-element.component';
import { FormsModule } from '@angular/forms';
import { AgentsService } from './services/agents/agents.service';
import { ChatService } from './services/chatServices/chat-services.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateAgentFormComponent,
    AgentListComponent,
    AgentElementComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ChatModule,
  ],
  providers: [AgentsService, ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
