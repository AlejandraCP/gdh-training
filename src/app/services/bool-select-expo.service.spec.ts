import { TestBed, inject } from '@angular/core/testing';

import { BoolSelectExpoService } from './bool-select-expo.service';

describe('BoolSelectExpoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoolSelectExpoService]
    });
  });

  it('should be created', inject([BoolSelectExpoService], (service: BoolSelectExpoService) => {
    expect(service).toBeTruthy();
  }));
});
