import { TestBed } from '@angular/core/testing';

import { ContenfullService } from './contenfull.service';

describe('ContenfullService', () => {
  let service: ContenfullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenfullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
