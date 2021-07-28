import { TestBed } from '@angular/core/testing';

import { RestCineService } from './rest-cine.service';

describe('RestCineService', () => {
  let service: RestCineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestCineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
