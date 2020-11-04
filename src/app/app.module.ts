import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { httpInterceptorProviders } from "./http-interceptors";



// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormlyModule } from '@ngx-formly/core';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { FileValueAccessor } from './file-value-accessor';
import { FormlyFieldFile } from './file-type.component';
import { MessagesComponent } from './messages/messages.component';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],
    }),
    FormlyMaterialModule,
    MatButtonModule,
    MatTableModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  declarations: [FileValueAccessor, FormlyFieldFile, AppComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
