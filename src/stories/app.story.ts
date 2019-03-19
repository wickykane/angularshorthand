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

storiesOf('Angular Shorthand', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule, BrowserAnimationsModule ],
      schemas: [],
      declarations: [CarouselComponent, CarouselItemDirective, NumberFormatDirective],
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
  }));
