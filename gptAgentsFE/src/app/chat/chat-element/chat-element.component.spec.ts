import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatElementComponent } from './chat-element.component';

describe('ChatElementComponent', () => {
  let component: ChatElementComponent;
  let fixture: ComponentFixture<ChatElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatElementComponent]
    });
    fixture = TestBed.createComponent(ChatElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
