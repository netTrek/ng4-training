import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BallModule } from './ball/ball.module';
import { UtilsModule } from './utils/utils.module';
import { LowerCasePipe } from '@angular/common';

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    UserModule,
    BallModule,
    AppRoutingModule
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'sq' }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
  constructor () {
    const lcp: LowerCasePipe = new LowerCasePipe ();

    console.log ( lcp.transform( 'ASDASDasdsa' ) );
  }
}
