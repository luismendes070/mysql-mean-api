import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest} from "@angular/common/http";
import { HttpHandler } from "./HttpHandler";
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

  /**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCache): Observable<HttpEvent<any>> {

  // No headers allowed in npm search request
  const noHeaderReq = req.clone({ headers: new HttpHeaders() });

  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Update the cache.
      }
    })
  );
}

// cache-then-refresh
if (req.headers.get('x-refresh')) {
  const results$ = sendRequest(req, next, this.cache);
  return cachedResponse ?
    results$.pipe( startWith(cachedResponse) ) :
    results$;
}
// cache-or-fetch
return cachedResponse ?
  of(cachedResponse) : sendRequest(req, next, this.cache);

}


