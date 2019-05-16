import { HeaderTableDirective } from './../app/components/table/header.directive';
import { FixedTableComponent } from './../app/shared/directive/test.directive';
import { LazyloadComponent } from './../app/components/lazyload/lazyload.component';
import { SkeletonComponent } from './../app/components/skeleton/skeleton.component';

import { NumberFormatDirective } from './../app/components/number-mask/number-mask.directive';
import { NumberMaskComponent } from './../app/components/number-mask/number-mask.component';
import { CarouselItemDirective } from './../app/components/carousel/carouselItem.directive';
import { CarouselContainerComponent } from './../app/components/carousel/carousel.container.component';
import { CarouselComponent } from './../app/components/carousel/carousel.component';
import { TableComponent } from './../app/components/table/table.component';
import { SharedModule } from './../app/shared/shared.module';
import { DropdownComponent } from './../app/components/dropdown/dropdown.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addons';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadDirective } from './../app/components/lazyload/lazyload.directive';
import { DynamicFormgroupComponent } from './../app/components/dynamic-formgroup/dynamic-formgroup.component';
import { ReactiveFormsModule } from '@angular/forms';

storiesOf('Angular Shorthand', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule, BrowserAnimationsModule, ReactiveFormsModule ],
      schemas: [],
      declarations: [HeaderTableDirective, FixedTableComponent, CarouselComponent, CarouselItemDirective, NumberFormatDirective, LazyLoadDirective],
      providers: []
    })
  )
  .add('Dropdown Component', () => ({
    component: DropdownComponent
  }))
  .add('Table Component', () => ({
    component: TableComponent
  }))
  .add('Carousel Component', () => ({
    component: CarouselContainerComponent
  }))
  .add('Input Number Mask', () => ({
    component: NumberMaskComponent
  }))
  .add('Skeleton', () => ({
    component: SkeletonComponent
  }))
  .add('Lazy Load Image', () => ({
    component: LazyloadComponent
  }))
  .add('FormArray', () => ({
    component: DynamicFormgroupComponent
  }));
