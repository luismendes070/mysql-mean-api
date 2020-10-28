//import {Config} from "codelyzer";

import {Config} from "@angular/service-worker/config";

showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        productsUrl: data.productsUrl,
        textfile:  data.textfile
    });
}
