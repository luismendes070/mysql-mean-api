import { Injectable, Directive } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// import { Directive } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Directive({
   // providedIn: 'root'
})
export class IssTrackingDataService {
  /* location() {
    throw new Error('Method not implemented.');
  } */

  constructor(httpClient: HttpClient) { }
}
