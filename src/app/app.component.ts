import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];
  title = 'products';
  type = '';
  description: '';
  filename: '';
  height: 0.0;
  width: 0.0;
  price = 0.0;
  rating = 0;
  created = '';
  action = '["Edit", "Delete"]';
  productId = '';
}
