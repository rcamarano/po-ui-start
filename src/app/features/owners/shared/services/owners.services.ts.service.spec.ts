import { TestBed } from '@angular/core/testing';

import { OwnersServicesTsService } from './owners.services.ts.service';

describe('OwnersServicesTsService', () => {
  let service: OwnersServicesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnersServicesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
