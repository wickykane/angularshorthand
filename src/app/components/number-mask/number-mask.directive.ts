import {
  Directive,
  forwardRef,
  Renderer2,
  ElementRef,
  HostListener
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { DecimalPipe } from '@angular/common';

const CONTROL_VALUE_ACCESSOR = {
  name: 'formatterParserValueAccessor',
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberFormatDirective),
  multi: true
};

@Directive({
  selector: '[numberFormat]',
  providers: [CONTROL_VALUE_ACCESSOR, DecimalPipe]
})
export class NumberFormatDirective implements ControlValueAccessor {
  onChangeCallback = (_: any) => {};
  onTouchedCallback = () => {};
  private model;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private decimalPipe: DecimalPipe
  ) {}

  @HostListener('input', ['$event.target.value'])
  input(value) {
    const viewValue = value;
    this.updateModel(viewValue);
    this.onChangeCallback(this.model);
    this.updateView(viewValue);
  }

  @HostListener('blur', [])
  blur() {
    this.onTouchedCallback();
  }

  updateModel(viewValue: any) {
    this.model = this.matchRegex(this.parse(viewValue || ''));
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.model = value;
      this.updateView(this.model, true);
    }
  }

  updateView(modelValue: string, forceUpdate = false) {
    const viewValue =
      modelValue === '-'
        ? modelValue
        : this.transfrom((this.parse(modelValue || '')));
    this.renderer.setProperty(this.element.nativeElement, 'value', viewValue);
  }

  transfrom(number): string {
    let decimals = String(number).split('.');
    if (decimals.length >= 3) {
      decimals = decimals.slice(0, 2);
      number = decimals.join('.');
    }
    const result =
      (decimals.length > 1 && decimals[1].length > 0) || decimals.length === 1
        ? this.decimalPipe.transform(this.matchRegex(number), '1.0-2')
        : this.decimalPipe.transform(this.matchRegex(number), '1.0-2') + '.';
    return result;
  }

  parse(string): number {
    return string.replace(/[^0-9.-]/g, '').replace(/[.]+/g, '.');
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  matchRegex(string) {
    const regex = /-?\d*\.?\d{1,2}/g;
    const result = string.match(regex);
    return (result && result[0]) || '';
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
}
