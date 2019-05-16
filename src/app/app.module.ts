import { FixedTableComponent } from './shared/directive/test.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SharedModule } from './shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NumberMaskComponent } from './components/number-mask/number-mask.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { LazyloadComponent } from './components/lazyload/lazyload.component';
import { DynamicFormgroupComponent } from './components/dynamic-formgroup/dynamic-formgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    TableComponent,
    CarouselComponent,
    NumberMaskComponent,
    SkeletonComponent,
    LazyloadComponent,
    DynamicFormgroupComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
