import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills3Component } from './skills3.component';

describe('Skills3Component', () => {
  let component: Skills3Component;
  let fixture: ComponentFixture<Skills3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skills3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skills3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
