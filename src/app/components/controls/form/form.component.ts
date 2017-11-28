import { FieldSetting } from '../../../../@types';
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  error: string;
  @Input() action: string;
  @Input() name: Array<FieldSetting>;
  @Input() fields: Array<FieldSetting>;
  @Input() model: any;
  @Input() onsubmit: Function;
  @Input() order: Function;
  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup(this.buildFormGroup());
    this.fields.forEach(f => {
      if (f.default) {
        this.model[f.name] = f.default;
      }
    });
  }

  buildFormGroup() {
    let formObject: any;
    // Check fields
    if (this.fields.length > 0) {
      formObject = {};
    }
    // Add validators
    this.fields.forEach(f => {
      // Validators
      const validators = new Array<ValidatorFn>();
      // Required
      if (f.required) {
        validators.push(Validators.required);
      }
      // E-mail
      if (f.type === 'e-mail') {
        validators.push(Validators.email);
      }
      // TODO: Other text types
      formObject[f.name] = new FormControl(this.model[f.name], validators);

      // Getters
      this[f.name] = () => this.form.get(f.name);
    });
    return formObject;
  }

  submit() {
    this.error = undefined;
    if (this.form.valid) {
      this.onsubmit();
    } else {
      this.error = 'Please validate the submitted information.'; // Object.keys(this.form.errors).join(',');
    }
  }
}
