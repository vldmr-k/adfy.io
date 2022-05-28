import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';


import { StringWidget } from './widgets/string/string.widget';
import { SchemaFormModule, WidgetRegistry } from 'ngx-schema-form';
import { AdfyWidgetRegistry } from './widgets/defaultwidgetregistry';
import { TuiCheckboxLabeledModule, TuiCheckboxModule, TuiInputModule } from '@taiga-ui/kit';
import { TuiHintModule, TuiLabelModule, TuiTooltipModule } from '@taiga-ui/core';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { TuiColorPickerModule } from '@taiga-ui/addon-editor';
import { ColorWidget } from './widgets/color/color.widget';

const moduleProviders = [
  {
    provide: WidgetRegistry,
    useClass: AdfyWidgetRegistry
  },
];

@NgModule({
  imports: [
    CommonModule,
    SchemaFormModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiLabelModule,
    TuiCheckboxModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiCheckboxLabeledModule,
    TuiColorPickerModule
  ],
  declarations: [
    StringWidget,
    CheckboxWidget,
    ColorWidget
  ],
  entryComponents: [
    StringWidget,
    CheckboxWidget,
    ColorWidget
  ],
  exports: [
    StringWidget,
    CheckboxWidget,
    ColorWidget
  ]
})

export class AdfySchemaFormModule {
  static forRoot(): ModuleWithProviders<AdfySchemaFormModule> {
    return {
      ngModule: AdfySchemaFormModule,
      providers: [...moduleProviders]
    };
  }

}
