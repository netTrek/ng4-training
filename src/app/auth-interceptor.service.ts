import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable ()
export class AuthInterceptorService implements HttpInterceptor {

  constructor () {
  }

  intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const tokenReq = req.clone ( { headers: req.headers.set ( 'token', 'netTrek' ) } );
    return next.handle ( tokenReq );
  }
}
