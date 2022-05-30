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
import { TuiButtonModule, TuiHintModule, TuiLabelModule, TuiTooltipModule } from '@taiga-ui/core';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { TuiInputColorModule } from '@taiga-ui/addon-editor';
import { ColorWidget } from './widgets/color/color.widget';
import { ArrayWidget } from './widgets/array/array.widget';

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
    TuiButtonModule,
    TuiLabelModule,
    TuiCheckboxModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiCheckboxLabeledModule,
    TuiInputColorModule
  ],
  declarations: [
    StringWidget,
    CheckboxWidget,
    ColorWidget,
    ArrayWidget
  ],
  entryComponents: [
    StringWidget,
    CheckboxWidget,
    ColorWidget
  ],
  exports: [
    StringWidget,
    CheckboxWidget,
    ColorWidget,
    ArrayWidget
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
