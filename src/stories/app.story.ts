import { DropdownComponent } from './../app/components/dropdown/dropdown.component';
import { AppComponent } from './../app/app.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addons';

storiesOf('Angular Shorthand', module)
.addDecorator(
    moduleMetadata({
      imports: [],
      schemas: [],
      declarations: [],
      providers: [],
    })
  )
.add('App Component', () => ({
    component: AppComponent
}))
.add('Dropdown Component', () => ({
    component: DropdownComponent
}));

