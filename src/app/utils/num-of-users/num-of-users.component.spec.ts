import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfUsersComponent } from './num-of-users.component';

describe('NumOfUsersComponent', () => {
  let component: NumOfUsersComponent;
  let fixture: ComponentFixture<NumOfUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumOfUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOfUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
