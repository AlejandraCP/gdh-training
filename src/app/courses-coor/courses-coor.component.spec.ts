import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCoorComponent } from './courses-coor.component';

describe('CoursesCoorComponent', () => {
  let component: CoursesCoorComponent;
  let fixture: ComponentFixture<CoursesCoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
