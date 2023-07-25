import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmChatListComponent } from './sm-chat-list.component';

describe('SmChatListComponent', () => {
  let component: SmChatListComponent;
  let fixture: ComponentFixture<SmChatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmChatListComponent]
    });
    fixture = TestBed.createComponent(SmChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
