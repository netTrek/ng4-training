import { Component } from '@angular/core';
import { Address } from './user/model/address';
import { User } from './user/model/user';

@Component ( {
  selector   : 'gfn-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title       = 'gfn';

  users: Array<User> = [
    <User>{
      name  : 'peter',
      adress: <Address>{
        zip    : 1234,
        country: 'Germany'
      }
    },
    <User>{
      name  : 'hans',
      adress: <Address>{
        zip    : 700,
        country: 'Bond'
      }
    }
  ];


  over ( event: Event ) {
    console.log ( 'over', event );
  }
}
