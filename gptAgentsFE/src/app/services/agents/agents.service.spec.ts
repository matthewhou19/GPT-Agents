import { AgentsService } from './agents.service';
import { TestBed } from '@angular/core/testing';

describe('AgentsService', () => {
  let service: AgentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
