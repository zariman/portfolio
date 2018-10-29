import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills4Component } from './skills4.component';

describe('Skills4Component', () => {
  let component: Skills4Component;
  let fixture: ComponentFixture<Skills4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skills4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skills4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
