import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user/user';

@Component ( {
  selector   : 'gfn-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title                          = 'gfn';
  hello: BehaviorSubject<string> = new BehaviorSubject ( 'hello world' );

  constructor ( public $user: UserService ) {

    // $user.getList().subscribe( next => console.log(next),
    //   err => console.log(err) );

    // $user.create( <User>{
    //   lastname: 'uenlue',
    //   firstname: 'saban',
    //   birthday: '4711'
    // }).subscribe( next => {
    //   console.log ( next );
    // });

    // $user.read( 20 ).subscribe( next => {
    //   console.log ( next );
    // })

    // $user.update ( <User>{
    //   id       : 20,
    //   lastname : '##uenlue',
    //   firstname: '##saban',
    //   birthday : '##4711'
    // } )
    //      .subscribe ( next => {
    //        console.log ( next );
    //      } );

    // $user.delete ( <User>{
    //   id: 20
    // } )
    //      .subscribe ();

  }
}
