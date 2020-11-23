import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

let configUrl = 'assets/config.json';

function getConfig() {
  return this.http.get(this.configUrl);
}