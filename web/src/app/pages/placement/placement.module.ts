import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacementRoutingModule } from './placement-routing.module'
import { TuiFilterModule, TuiInputModule, TuiIslandModule, TuiStepperModule } from '@taiga-ui/kit';

import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { template, area, placement } from '@store/reducers';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import {PlacementListModule} from "@pages/placement/pages/list/list.module";
import {PlacementAddModule} from "@pages/placement/pages/add/add.module";
import {PlacementUpdateModule} from "@pages/placement/pages/edit/update.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlacementRoutingModule,
    TuiStepperModule,
    TuiIslandModule,
    TuiLoaderModule,
    TuiInputModule,
    TuiButtonModule,
    TuiFilterModule,

    PlacementListModule,
    PlacementAddModule,
    PlacementUpdateModule,
    StoreModule.forFeature(template.templateFeature),
    StoreModule.forFeature(area.areaFeature),
    StoreModule.forFeature(placement.placementFeature),

  ]
})
export class PlacementModule { }
