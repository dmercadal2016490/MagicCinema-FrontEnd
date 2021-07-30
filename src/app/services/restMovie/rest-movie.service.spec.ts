import { TestBed } from '@angular/core/testing';

import { RestMovieService } from './rest-movie.service';

describe('RestMovieService', () => {
  let service: RestMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
