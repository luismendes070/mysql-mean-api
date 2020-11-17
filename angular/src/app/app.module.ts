import {inject, InjectionToken} from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { LoginService } from './login/login.service';
import * as fromRoot from './reducers';

// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { AppComponent } from './app.component';
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

// import { FileValueAccessor } from './file-value-accessor';
import { FormlyFieldFile } from './file-type.component';
// import { MessagesComponent } from './messages/messages.component';
// import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductService } from './products/product.service';
// import { ProductService } from './product.service';

// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './products/entity-metadata';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<fromRoot.State>>('Registered Reducers', {
  factory: () => {
    const serv = inject(LoginService);
    // return reducers synchronously
    return serv.getReducers();
  }
});

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ProductDetailComponent,
    // FileValueAccessor,
    FormlyFieldFile,

  ],
  imports: [
    StoreModule.forRoot(REDUCER_TOKEN),
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    BrowserModule.withServerTransition({ appId: 'com.example.ngproductsapi.ServerApp' }),
    FormsModule,
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

  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent,
    MessagesComponent,
    ProductService,
    ProductDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
