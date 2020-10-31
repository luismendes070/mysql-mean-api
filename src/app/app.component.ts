import {
  Component,
  OnInit,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

//import {Product} from './product';

//let product: Product;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({});

  onSubmit({ valid, value }) {
    console.log('onSubmit...\n\n');
    console.log(value);
  }

  model: {
    title: 'products';
    type: '';
    description: '';
    filename: '';
    height: 0.0;
    width: 0.0;
    price: 0.0;
    rating: 0;
    created: '';
    action: '["Edit", "Delete"]';
    productId: '';
  }; //fetch here

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'file',
      type: 'file',
      templateOptions: {
        type: 'text',
        label: 'products Anexar arquivo json'
      }
    },
  ];
}
