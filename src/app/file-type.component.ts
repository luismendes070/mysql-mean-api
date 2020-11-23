import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  template: `<input type="file" [formControl]="formControl" [formlyAttributes]="field">`,
  styleUrls: ['./app.component.css'],
})
export class FormlyFieldFile extends FieldType {}
