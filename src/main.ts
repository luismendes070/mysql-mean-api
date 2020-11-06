import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { Firebase } from '@ionic-native/firebase/ngx';

constructor(private firebase: Firebase) { }



this.firebase.getToken()
  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));

this.firebase.onNotificationOpen()
   .subscribe(data => console.log(`User opened a notification ${data}`));

this.firebase.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));


// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
