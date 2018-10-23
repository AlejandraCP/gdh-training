import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadXlsComponent } from './upload-xls.component';

describe('UploadXlsComponent', () => {
  let component: UploadXlsComponent;
  let fixture: ComponentFixture<UploadXlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadXlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
