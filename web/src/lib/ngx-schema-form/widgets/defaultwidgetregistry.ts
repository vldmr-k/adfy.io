
import { Injectable } from '@angular/core';
import { DefaultWidgetRegistry } from 'ngx-schema-form';
import { ArrayWidget } from './array/array.widget';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { ColorWidget } from './color/color.widget';
import { FilemanagerWidget } from './file/filemanager.widget';
import { StringWidget } from './string/string.widget';

@Injectable()
export class AdfyWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();


    this.register('string', StringWidget);
    this.register('boolean', CheckboxWidget);
    this.register('checkbox', CheckboxWidget);
    this.register('color', ColorWidget);
    this.register('array', ArrayWidget);
    this.register('file', FilemanagerWidget);
    this.register('filemanager', FilemanagerWidget);

    this.setDefaultWidget(StringWidget);
  }
}
