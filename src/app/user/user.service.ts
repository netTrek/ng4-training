import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Address } from './model/address';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable ()
export class UserService {

  readonly endpoint = 'http://localhost:3000/users';

  selectedUsr: User;

  /**
   * copy and remove from AppComponent.ts
   * @type {[User , User]}
   */
  users: Array<User> = [];

  /* = [
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
   ];*/

  constructor ( private $http: HttpClient ) {
    this.getUserList ()
        .subscribe ( next => {
          this.users = next;
        } );
  }

  /**
   * copy and remove drom userListComponent.ts
   */
  addRandomUser () {
    this.create ( <User>{
      name  : `random ${this.users.length}`,
      adress: <Address> {
        zip    : 123 + this.users.length,
        country: 'Germany'
      }
    } );
  }

  delByUsr ( usr: User ) {
    this.delete( usr );
  }

  // create
  create ( user: User ) {
    this.$http.post<User> ( this.endpoint, user )
        .subscribe ( newUser => {
          this.users.push ( newUser );
        } );
  }

  // read
  getUserList (): Observable<User[]> {
    return this.$http.get ( this.endpoint );
  }
  getUserById ( id: number ): Observable<User> {
    return this.$http.get ( `${this.endpoint}/${id}` );
  }

  // update
  update ( user: User ) {
    this.$http.put ( `${this.endpoint}/${user.id}`, user )
        .subscribe ( (next) => {
          // console.log ( next );
          for ( let i = 0; i < this.users.length; i++ ) {
            const crrUsr: User = this.users[i];
            if ( crrUsr.id === user.id ) {
              this.users[i] = user;
              break;
            }
          }
        } );
  }

  // delete
  delete ( user: User ) {
    this.$http.delete ( `${this.endpoint}/${user.id}` )
        .subscribe ( () => {
          this.users.splice( this.users.indexOf( user), 1);
        } );
  }
}
