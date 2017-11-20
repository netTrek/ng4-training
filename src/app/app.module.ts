import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers   : [ {
                    provide : HTTP_INTERCEPTORS,
                    useClass: AuthInterceptorService,
                    multi   : true
                  }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
