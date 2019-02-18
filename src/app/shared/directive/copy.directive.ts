import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[copyDirective]',
})
export class CopyDirective {
    constructor(private element: ElementRef) {
        console.log("elemnts")
    }
    @HostListener('click', ['$event'])
    onElementClick(event) {
        console.log(event);
    }
 }