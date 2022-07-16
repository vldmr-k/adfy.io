import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiButtonModule, TuiDataListModule, TuiDropdownModule, TuiLoaderModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiFilterModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PlacementUpdateComponent} from "./update.component";
import {PlacementEditFormComponent} from "./component/form.component";

import {SchemaFormModule, WidgetRegistry} from "ngx-schema-form";
import {AdfySchemaFormModule} from "@lib/ngx-schema-form/adfy-schema-form.module";
import {AdfyWidgetRegistry} from "@lib/ngx-schema-form/widgets/defaultwidgetregistry";

@NgModule({
  declarations: [
    PlacementUpdateComponent,
    PlacementEditFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TuiLoaderModule,
    TuiFilterModule,
    TuiDataListModule,
    TuiSvgModule,

    TuiDropdownModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiDataListModule,

    SchemaFormModule.forRoot(),
    AdfySchemaFormModule.forRoot(),

  ],
  providers: [{ provide: WidgetRegistry, useClass: AdfyWidgetRegistry }],
  exports: [
    PlacementUpdateComponent
  ]
})
export class PlacementUpdateModule { }
