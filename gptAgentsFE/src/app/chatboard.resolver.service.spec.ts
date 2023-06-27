import { TestBed } from '@angular/core/testing';

import { ChatboardResolverService } from './chatboard/chatboard.resolver.service';

describe('ChatboardResolverService', () => {
  let service: ChatboardResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatboardResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
