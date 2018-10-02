import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdministradorComponent } from './view-administrador.component';

describe('ViewAdministradorComponent', () => {
  let component: ViewAdministradorComponent;
  let fixture: ComponentFixture<ViewAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
