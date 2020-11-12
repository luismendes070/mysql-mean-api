import {
  Component,
  OnInit,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Product } from '../product';

@Component({
  selector: 'app-root',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  preserveWhitespaces: true,
})
export class EditProductComponent extends Component implements Product {
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

  onSubmit({ valid, value }) {
    console.log('onSubmit...\n\n');
    console.log(value);
  }

  model: {
    product: Product;
    products: Product[];
  }; //fetch here

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'file',
      type: 'file',
      templateOptions: {
        type: 'text',
        label: 'products Anexar arquivo json',
      },
    },
  ];
}
