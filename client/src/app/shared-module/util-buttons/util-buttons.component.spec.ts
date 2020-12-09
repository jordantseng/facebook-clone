import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilButtonComponent } from './util-buttons.component';

describe('UtilButtonComponent', () => {
  let component: UtilButtonComponent;
  let fixture: ComponentFixture<UtilButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
