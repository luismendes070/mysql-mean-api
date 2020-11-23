    import {HttpEvent, HttpEventType, HttpRequest} from "@angular/common/http";
    import {catchError, last, map, tap} from "rxjs/internal/operators";
import { fileURLToPath } from 'url';


// const file: File;
    
// file = require('./products.json';

    const req = new HttpRequest('POST', '/upload/file', file, {
      reportProgress: true,
    });

    // The `HttpClient.request` API produces a raw event stream
// which includes start (sent), progress, and response events.
return this.http.request(req).pipe(
  map(event => this.getEventMessage(event, file)),
  tap(message => this.showProgress(message)),
  last(), // return last (completed) message to caller
  catchError(this.handleError(file))
);

/** Return distinct message for sent, upload progress, & response events */
private getEventMessage(event: HttpEvent<any>, file: File) {
  switch (event.type) {
    case HttpEventType.Sent:
      return `Uploading file "${file.name}" of size ${file.size}.`;

    case HttpEventType.UploadProgress:
      // Compute and show the % done:
      const percentDone = Math.round(100 * event.loaded / event.total);
      return `File "${file.name}" is ${percentDone}% uploaded.`;

    case HttpEventType.Response:
      return `File "${file.name}" was completely uploaded!`;

    default:
      return `File "${file.name}" surprising upload event: ${event.type}.`;
  }
}

/** Return distinct message for sent, upload progress, & response events */
private getEventMessage(event: HttpEvent<any>, file: File) {
  switch (event.type) {
    case HttpEventType.Sent:
      return `Uploading file "${file.name}" of size ${file.size}.`;

    case HttpEventType.UploadProgress:
      // Compute and show the % done:
      const percentDone = Math.round(100 * event.loaded / event.total);
      return `File "${file.name}" is ${percentDone}% uploaded.`;

    case HttpEventType.Response:
      return `File "${file.name}" was completely uploaded!`;

    default:
      return `File "${file.name}" surprising upload event: ${event.type}.`;
  }
}
