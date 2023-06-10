import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentElementComponent } from './agent-element.component';

describe('AgentElementComponent', () => {
  let component: AgentElementComponent;
  let fixture: ComponentFixture<AgentElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentElementComponent]
    });
    fixture = TestBed.createComponent(AgentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
