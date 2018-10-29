import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills2Component } from './skills2.component';

describe('Skills2Component', () => {
  let component: Skills2Component;
  let fixture: ComponentFixture<Skills2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skills2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skills2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
