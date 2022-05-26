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
import { FormElementComponent } from './formelement.component'

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
    TuiCheckboxLabeledModule
  ],
  declarations: [
    StringWidget,
    CheckboxWidget,
    FormElementComponent,
  ],
  entryComponents: [
    StringWidget,
    CheckboxWidget,
    FormElementComponent
  ],
  exports: [
    StringWidget,
    CheckboxWidget,
    FormElementComponent,
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
