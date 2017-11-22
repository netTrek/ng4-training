import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class UserGuard implements CanActivate {

  constructor ( private $user: UserService ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this.$user.role ) {
      return true;
    } else {
      this.$user.errorMsg$.next( 'you have no permissions for that route');
      return false;
    }
  }
}
