import { TestBed, inject } from '@angular/core/testing';

import { MisCursosService } from './mis-cursos.service';

describe('MisCursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MisCursosService]
    });
  });

  it('should be created', inject([MisCursosService], (service: MisCursosService) => {
    expect(service).toBeTruthy();
  }));
});
