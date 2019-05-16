import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[headerTable]'})
export class HeaderTableDirective {
    constructor(public tpl: TemplateRef<any>) {
        console.log(1);
     }
}