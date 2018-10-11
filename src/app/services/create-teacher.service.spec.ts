import { TestBed, inject } from '@angular/core/testing';

import { CreateTeacherService } from './create-teacher.service';

describe('CreateTeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTeacherService]
    });
  });

  it('should be created', inject([CreateTeacherService], (service: CreateTeacherService) => {
    expect(service).toBeTruthy();
  }));
});
