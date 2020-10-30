import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest} from "@angular/common/http";
import {HttpHandler} from "./noop-interceptos";
import {of} from "rxjs";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cacheable.
    if (!isCacheable(req)) { return next.handle(req); }

    const cachedResponse = this.cache.get(req);
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}
