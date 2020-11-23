import * as mdc from 'material-components-web';
const checkbox = new mdc.checkbox.MDCCheckbox(document.querySelector('.mdc-checkbox'));
// OR
import {checkbox} from 'material-components-web';
const checkbox = new checkbox.MDCCheckbox(document.querySelector('.mdc-checkbox'));



import {
	Component,
	OnInit,
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Product } from './product';

// import { Local } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent extends Component implements Product{
  title: string;
  type: string;
  description: string;
  filename: string;
  height: number;
  width: number;
  price: number;
  rating: number;
  id: number;

  form = new FormGroup({});

  // tslint:disable-next-line:typedef
  onSubmit({ valid, value }) {
    console.log('onSubmit...\n\n');
    console.log(value);
  }

  model: {
    product: Product,
    products: Product[]
  }; //fetch here

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'file',
      type: 'file',
      templateOptions: {
        type: 'text',
        label: 'Anexar arquivo json'
      }
    },
  ];
}
