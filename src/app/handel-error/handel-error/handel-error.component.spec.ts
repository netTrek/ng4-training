import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelErrorComponent } from './handel-error.component';

describe('HandelErrorComponent', () => {
  let component: HandelErrorComponent;
  let fixture: ComponentFixture<HandelErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandelErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandelErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
