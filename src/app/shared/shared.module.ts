import { CopyDirective } from './directive/copy.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixHeaderTableDirective } from './directive/stickyTableHeader.directive';

@NgModule({
    declarations: [CopyDirective, FixHeaderTableDirective],
    imports: [ CommonModule ],
    exports: [CopyDirective, FixHeaderTableDirective],
    providers: [],
})
export class SharedModule {}