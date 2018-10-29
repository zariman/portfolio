import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMe2Component } from './about-me2.component';

describe('AboutMe2Component', () => {
  let component: AboutMe2Component;
  let fixture: ComponentFixture<AboutMe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
