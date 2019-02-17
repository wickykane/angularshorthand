import { SharedModule } from './../app/shared/shared.module';
import { DropdownComponent } from './../app/components/dropdown/dropdown.component';
import { AppComponent } from './../app/app.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addons';
import { CopyDirective } from 'src/app/shared/directive/copy.directive';

storiesOf('Angular Shorthand', module)
.addDecorator(
    moduleMetadata({
      imports: [SharedModule],
      schemas: [],
      declarations: [],
      providers: [],
    })
  )
.add('App Component', () => ({
    component: AppComponent
}))
.add('Dropdown Component', () => ({
    component: DropdownComponent,
}));

