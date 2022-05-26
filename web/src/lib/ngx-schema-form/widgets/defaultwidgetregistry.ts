
import { Injectable } from '@angular/core';
import { DefaultWidgetRegistry } from 'ngx-schema-form';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { StringWidget } from './string/string.widget';

@Injectable()
export class AdfyWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('string', StringWidget);
    this.register('boolean', CheckboxWidget);
    this.register('checkbox', CheckboxWidget);



    this.setDefaultWidget(StringWidget);
  }
}
