import { TestBed } from '@angular/core/testing';

import { LoggedoutGuardGuard } from './loggedout-guard.guard';

describe('LoggedoutGuardGuard', () => {
  let guard: LoggedoutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedoutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
