import { Component, ViewChild, OnInit } from '@angular/core';
import { Agent } from '../modle/agent';
import { AgentsService } from '../services/agents/agents.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-agent-form',
  templateUrl: './create-agent-form.component.html',
  styleUrls: ['./create-agent-form.component.css'],
})
export class CreateAgentFormComponent implements OnInit {
  private agent: Agent;
  defualtRole = "such as 'translator'";
  defaultDescription = "SUCH AS 'tranlate english paragraphs to Chinesse'";
  @ViewChild('f', { static: false }) form: NgForm;
  constructor(
    private agentService: AgentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    if (this.agent) {
      this.agentService.updateAgent(
        this.agent.id!,
        Agent.createFromObj(this.form.value)
      );
      this.form.reset();
      this.router.navigate(['']);
    } else {
      this.agentService.addAgent(Agent.createFromObj(this.form.value));
      console.log(this.form);
      this.form.reset();
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.agentService.getAgentById(+id).subscribe((agent) => {
        this.agent = agent;
        this.defualtRole = this.agent.role;
        this.defaultDescription = this.agent.description;
      });
    }
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['']);
  }
  /*
  onAddAgent() {
    this.agentService.addAgent({
      role: this.agentRole,
      description: this.agentDescription,
    });
    this.router.navigate(['']);
  }
  */
}
