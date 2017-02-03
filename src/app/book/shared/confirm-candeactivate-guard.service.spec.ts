/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfirmCandeactivateGuardService } from './confirm-candeactivate-guard.service';

describe('Service: ConfirmCandeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmCandeactivateGuardService]
    });
  });

  it('should ...', inject([ConfirmCandeactivateGuardService], (service: ConfirmCandeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
