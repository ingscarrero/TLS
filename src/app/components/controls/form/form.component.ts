import { FieldSetting } from '../../../../@types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() action: string;
  @Input() name: Array<FieldSetting>;
  @Input() fields: Array<FieldSetting>;
  @Input() model: any;
  @Input() onsubmit: Function;
  @Input() order: Function;
  constructor() {
  }

  ngOnInit() {
    this.fields.forEach(f => {
      if (f.default) {
        this.model[f.name] = f.default;
      }
    });
  }

  submit() {
    this.onsubmit();
  }

}
