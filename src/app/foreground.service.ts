import { Injectable } from '@angular/core';

import { ForegroundService } from '@ionic-native/foreground-service/ngx';


constructor(public foregroundService: ForegroundService) { }

startService() {
 // Notification importance is optional, the default is 1 - Low (no sound or vibration)
 this.foregroundService.start('GPS Running', 'Background Service', 'drawable/fsicon');
}

stopService() {
 // Disable the foreground service
 this.foregroundService.stop();
}


@Injectable({
  providedIn: 'root'
})
export class ForegroundService {

  constructor() { }
}
