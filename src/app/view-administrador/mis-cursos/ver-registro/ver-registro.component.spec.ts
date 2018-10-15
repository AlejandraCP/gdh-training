import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRegistroComponent } from './ver-registro.component';

describe('VerRegistroComponent', () => {
  let component: VerRegistroComponent;
  let fixture: ComponentFixture<VerRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
