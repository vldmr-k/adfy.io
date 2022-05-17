import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockBuilderComponent } from './block-builder.component';


import {
  WidgetRegistry,
  DefaultWidgetRegistry,
  SchemaFormModule
} from "ngx-schema-form";
import { AdfyWidgetRegistry } from '@lib/ngx-schema-form/widgets/defaultwidgetregistry';
import { AdfySchemaFormModule } from '@lib/ngx-schema-form/adfy-schema-form.module';


@NgModule({
  declarations: [
    BlockBuilderComponent
  ],
  imports: [
    CommonModule,
    SchemaFormModule.forRoot(),
    AdfySchemaFormModule.forRoot()
  ],
  exports: [
    BlockBuilderComponent
  ],
  providers: [{ provide: WidgetRegistry, useClass: AdfyWidgetRegistry }],

})
export class BlockBuilderModule { }
