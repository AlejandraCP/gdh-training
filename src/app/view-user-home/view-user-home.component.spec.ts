import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserHomeComponent } from './view-user-home.component';

describe('ViewUserHomeComponent', () => {
  let component: ViewUserHomeComponent;
  let fixture: ComponentFixture<ViewUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
