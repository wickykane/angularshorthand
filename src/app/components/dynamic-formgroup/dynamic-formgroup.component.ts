import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-formgroup',
  templateUrl: './dynamic-formgroup.component.html',
  styleUrls: ['./dynamic-formgroup.component.scss']
})
export class DynamicFormgroupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  formData: FormGroup;
  items: FormArray;
  ngOnInit() {
    this.formData = this.fb.group({
      items: this.fb.array([])
    });
  }

  createItem() {
    return this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      email: [null, [Validators.required, this.mailValidator()]]
    });
  }

  addItem() {
    this.items = this.formData.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  delete(index) {
    this.items = this.formData.get('items') as FormArray;
    this.items.removeAt(index);
  }

  mailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const mail = /\w+@\w+/i;
      const result = mail.test(control.value);
      return result ? null : { email: 'Invalid Email' };
    };
  }
}
