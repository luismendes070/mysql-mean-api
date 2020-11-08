import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpRequest
} from '@angular/common/http';

import {
  HttpHandler
} from './HttpHandler';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor extends HttpHandler implements HttpInterceptor {
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}


