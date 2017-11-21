import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Address } from './model/address';

@Injectable()
export class UserService {

  selectedUsr: User;

  /**
   * copy and remove from AppComponent.ts
   * @type {[User , User]}
   */
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
  /**
   * copy and remove drom userListComponent.ts
   */
  addRandomUser () {
    this.users.push ( <User>{
      name  : `random ${this.users.length}`,
      adress: <Address> {
        zip    : 123 + this.users.length,
        country: 'Germany'
      }
    } );
  }

  delByUsr ( usr: User ) {
    this.users.splice ( this.users.indexOf( usr ), 1 );
  }

}
