import { Component, OnInit } from '@angular/core';
import { Agent } from '../modle/agent';
import { ChatService } from '../services/chatServices/chat-services.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AgentsService } from '../services/agents/agents.service';

@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css'],
})
export class ChatboardComponent implements OnInit {
  agent: Agent;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.agent = data['agent'];
    });
  }
}
