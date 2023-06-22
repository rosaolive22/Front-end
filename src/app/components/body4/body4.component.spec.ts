import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body4Component } from './body4.component';

describe('Body4Component', () => {
  let component: Body4Component;
  let fixture: ComponentFixture<Body4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Body4Component]
    });
    fixture = TestBed.createComponent(Body4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
