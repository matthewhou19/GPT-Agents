import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgentFormComponent } from './create-agent-form.component';

describe('CreateAgentFormComponent', () => {
  let component: CreateAgentFormComponent;
  let fixture: ComponentFixture<CreateAgentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAgentFormComponent]
    });
    fixture = TestBed.createComponent(CreateAgentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
