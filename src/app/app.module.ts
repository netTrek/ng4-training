import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BallModule } from './ball/ball.module';
import { UtilsModule } from './utils/utils.module';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { HandelErrorModule } from './handel-error/handel-error.module';
import { HomeModule } from './home/home.module';

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    UserModule,
    BallModule,
    HomeModule,
    AppRoutingModule,
    HandelErrorModule,
    UtilsModule // import UtilsModule to get NumOfUSersComponent
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'sq' }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
  constructor () {

    // const eventObservable: Observable<MouseEvent> = Observable.fromEvent( document, 'mousemove' );
    // eventObservable
    //   .filter ( evnt => evnt.clientX < 50 )
    //   .subscribe( next => {
    //   console.log ( next );
    // });

    // // const sub: Subject<number> = new Subject ();
    // const sub: BehaviorSubject<number> = new BehaviorSubject ( 0 );
    // sub.subscribe( first => console.log( '1. sub' , first) );
    // sub.next ( 1 );
    // sub.next ( 2 );
    // sub.next ( 3 );
    // const subscription: Subscription = sub.subscribe ( next => console.log ( '2. sub', next ) );
    // sub.next ( 4 );
    // sub.next ( 5 );
    // subscription.unsubscribe();
    // sub.next ( 6 );

    // const obs: Observable<number> = Observable.create ( observer => {
    //   let counter = 0;
    //   const intervalID: number = window.setInterval( () => {
    //     observer.next ( counter ++ );
    //     if ( counter === 10 ) {
    //       window.clearInterval( intervalID );
    //       observer.complete();
    //     }
    //   }, 500 );
    // }) ;
    // obs.filter ( crrVal => crrVal % 2 === 0 )
    //    /*.filter ( ( currentVal ) => {
    //          if ( currentVal % 2 === 0 ) {
    //            return true;
    //          }
    //          return false;
    //      })*/
    //    /*.map( ( currentVal ) => {
    //      return currentVal * 10;
    //    })*/
    //    .map( crrVal => crrVal * 10 )
    //    .subscribe ( ( nextValue ) => {
    //      console.log ( nextValue );
    //    }, err => console.error( err ) );
    //  obs.subscribe( next => console.log (next),
    //    error => console.error (error ),
    //    () => {
    //    console.log ( 'ich bin fertig' );
    //    });
  }
}
