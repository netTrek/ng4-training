import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './model/user';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable ()

export class UserResolveService implements Resolve<User> {

  constructor ( private $user: UserService ) {
  }

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {

    const id: number = route.params [ 'id' ];
    return this.$user.getUserById( id );
  }
}
