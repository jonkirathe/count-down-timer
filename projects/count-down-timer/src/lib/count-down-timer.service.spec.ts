import { TestBed } from '@angular/core/testing';

import { CountDownTimerService } from './count-down-timer.service';

describe('CountDownTimerService', () => {
  let service: CountDownTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountDownTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
