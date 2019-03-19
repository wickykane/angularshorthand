import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SharedModule } from './shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NumberMaskComponent } from './components/number-mask/number-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    TableComponent,
    CarouselComponent,
    NumberMaskComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
