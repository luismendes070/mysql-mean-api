// import {Compiler, Compilation, Tappable} from 'webpack';

import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

 import { Local } from '@angular/common';
 import { defineCustomElements } from '@ionic/pwa-elements/loader';
 import { Firebase } from '@ionic-native/firebase/ngx';

export class Main implements Tappable{

  private token = '17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4';

  private firebase: Firebase;

  constructor(private firebase: Firebase) {

this.firebase.getToken()
  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));

this.firebase.onNotificationOpen()
   .subscribe(data => console.log(`User opened a notification ${data}`));

this.firebase.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));

  }// end constructor



}// fim Main


// Call the element loader after the platform has been bootstrapped
// defineCustomElements(window);

if (environment.production) {
	console.log("production environment enabled...");
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
     platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
   });
