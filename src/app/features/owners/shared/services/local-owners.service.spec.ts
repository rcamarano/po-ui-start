import { TestBed } from '@angular/core/testing';

import { LocalOwnersService } from './local-owners.service';

describe('LocalOwnersService', () => {
  let service: LocalOwnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalOwnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
