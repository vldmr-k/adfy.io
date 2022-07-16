import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiButtonModule, TuiDataListModule, TuiDropdownModule, TuiLoaderModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiFilterModule, TuiInputModule, TuiIslandModule, TuiStepperModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";

import {RouterModule} from "@angular/router";
import {PlacementAddComponent} from "@pages/placement/pages/add/add.component";

import {PlacementStepperComponent} from "@pages/placement/pages/add/components/stepper/stepper.component";
import {PlacementStepNameComponent} from "@pages/placement/pages/add/components/step/name.component";
import {PlacementStepTemplateComponent} from "@pages/placement/pages/add/components/step/template.component";
import {PlacementStepAreaComponent} from "@pages/placement/pages/add/components/step/area.component";
import {PlacementStepFinishComponent} from "@pages/placement/pages/add/components/step/finish.component";

@NgModule({
  declarations: [

    PlacementStepperComponent,
    PlacementStepNameComponent,



    PlacementStepTemplateComponent,
    PlacementStepAreaComponent,
    PlacementStepFinishComponent,

    PlacementAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TuiLoaderModule,
    TuiFilterModule,
    TuiDataListModule,
    TuiSvgModule,
    TuiInputModule,
    TuiIslandModule,

    TuiDropdownModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiStepperModule

  ],
  exports: [
    PlacementAddComponent
  ]
})
export class PlacementAddModule { }
