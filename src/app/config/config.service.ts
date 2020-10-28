import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

configUrl = 'assets/config.json';

getConfig() {
  return this.http.get(this.configUrl);
}