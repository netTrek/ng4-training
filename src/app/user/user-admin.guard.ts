import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class UserAdminGuard implements CanActivate {

  constructor ( private $user: UserService ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this.$user.role === 'admin' ) {
      return true;
    } else {
      this.$user.errorMsg$.next( 'you have to be an admin to see that route');
      return false;
    }
  }
}
