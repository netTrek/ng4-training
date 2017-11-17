import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './user';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

@Injectable ()
export class UserService {

  crrUserlist: Observable<User[]>;

  readonly endpoint = 'http://localhost:3000';

  constructor ( private $http: HttpClient ) {
    this.crrUserlist = this.getList ();
  }

  /**
   * create
   * @param {User} user
   * @returns {Observable<User>}
   */
  create ( user: User ): Observable<User> {
    return this.$http.post<User> ( `${this.endpoint}/users`, user )
               .do ( newuser => {
                 console.log ( 'debug', newuser );
                 this.crrUserlist = this.getList ();
               } );
  }

  /**
   * READ
   * @returns {Observable<User[]>}
   */

  getList (): Observable<User[]> {

    // const params: HttpParams = new HttpParams ().set('token', 'saban ünlü' );
    // return this.$http.get<User[]> ( `${this.endpoint}/users`, { params } )

    // const headers: HttpHeaders = new HttpHeaders  ().set('token', 'saban ünlü' );
    // return this.$http.get<User[]> ( `${this.endpoint}/users`, { headers } )

    return this.$http.get<User[]> ( `${this.endpoint}/users` )
               .do ( userList => {
                 console.log ( 'debug', userList );
               } );
  }

  read ( id: number ): Observable<User> {
    return this.$http.get<User> ( `${this.endpoint}/users/${id}` )
               .do ( user => {
                 console.log ( 'debug', user );
               } );
  }

  /**
   * update
   * @param {User} user
   * @returns {Observable<User>}
   */
  update ( user: User ): Observable<User> {
    return this.$http.put<User> ( `${this.endpoint}/users/${user.id}`, user )
               .do ( updateduser => {
                 console.log ( 'debug', updateduser );
                 this.crrUserlist = this.getList ();
               } );
  }

  /**
   * delete
   * @param {User} user
   * @returns {Observable<User>}
   */
  delete ( user: User ): Observable<any> {
    return this.$http.delete<User> ( `${this.endpoint}/users/${user.id}`, user )
               .do ( res => {
                 console.log ( 'debug', res );
                 this.crrUserlist = this.getList ();
               } );
  }

}
