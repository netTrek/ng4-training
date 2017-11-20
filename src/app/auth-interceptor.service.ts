import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { getToken } from './user/user.service';

@Injectable ()
export class AuthInterceptorService implements HttpInterceptor {

  constructor () {}

  intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const tokenReq = req.clone ( { headers: req.headers.set ( 'authorization', `Bearer ${getToken()}` ) } );
    return next.handle ( tokenReq );
  }
}
