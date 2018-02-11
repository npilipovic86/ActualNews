import { TestBed, inject } from '@angular/core/testing';

import { VestService } from './vest.service';

describe('VestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VestService]
    });
  });

  it('should be created', inject([VestService], (service: VestService) => {
    expect(service).toBeTruthy();
  }));
});
