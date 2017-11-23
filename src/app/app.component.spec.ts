import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UtilsModule } from './utils/utils.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { HandelErrorModule } from './handel-error/handel-error.module';
import { DebugElement } from '@angular/core';

describe ( 'AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let h1DebugElement: DebugElement;
  let h1: HTMLElement;

  beforeEach ( async ( () => {
    TestBed.configureTestingModule ( {
      imports     : [
        RouterTestingModule,
        UtilsModule,
        UserModule,
        HandelErrorModule
      ],
      declarations: [
        AppComponent
      ]
    } )
           .compileComponents ();
  } ) );

  beforeEach ( () => {
    fixture = TestBed.createComponent ( AppComponent );
    app     = fixture.debugElement.componentInstance;

    // query for the title <h1> by CSS element selector
    h1DebugElement = fixture.debugElement.query ( By.css ( 'h1' ) );
    h1 = h1DebugElement.nativeElement;
  } );

  it ( 'should create the app', () => {
    expect ( app )
      .toBeTruthy ();
  } );
  it ( `should have as title 'gfn'`, () => {
    expect ( app.title )
      .toEqual ( 'gfn' );
  } );
  it ( 'should render title in a h1 tag', () => {
    fixture.detectChanges ();
    expect ( h1.textContent )
      .toContain ( 'Welcome to gfn!' );
  } );
} );
