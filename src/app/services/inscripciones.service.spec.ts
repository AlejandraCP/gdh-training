import { TestBed, inject } from '@angular/core/testing';

import { InscripcionesService } from './inscripciones.service';

describe('InscripcionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscripcionesService]
    });
  });

  it('should be created', inject([InscripcionesService], (service: InscripcionesService) => {
    expect(service).toBeTruthy();
  }));
});
