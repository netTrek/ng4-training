import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithExportOptionComponent } from './play-with-export-option.component';

describe('PlayWithExportOptionComponent', () => {
  let component: PlayWithExportOptionComponent;
  let fixture: ComponentFixture<PlayWithExportOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayWithExportOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWithExportOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
