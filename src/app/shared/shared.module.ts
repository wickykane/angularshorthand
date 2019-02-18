import { CopyDirective } from './directive/copy.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CopyDirective],
    imports: [ CommonModule ],
    exports: [CopyDirective],
    providers: [],
})
export class SharedModule {}