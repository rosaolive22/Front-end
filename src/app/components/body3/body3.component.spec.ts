import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body3Component } from './body3.component';

describe('Body3Component', () => {
  let component: Body3Component;
  let fixture: ComponentFixture<Body3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Body3Component]
    });
    fixture = TestBed.createComponent(Body3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
