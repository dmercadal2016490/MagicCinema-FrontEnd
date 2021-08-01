import { TestBed } from '@angular/core/testing';

import { AdminCineGuardGuard } from './admin-cine-guard.guard';

describe('AdminCineGuardGuard', () => {
  let guard: AdminCineGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminCineGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
