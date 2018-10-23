import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListXlsComponent } from './list-xls.component';

describe('ListXlsComponent', () => {
  let component: ListXlsComponent;
  let fixture: ComponentFixture<ListXlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListXlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
