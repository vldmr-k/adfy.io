import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacementRoutingModule } from './placement-routing.module'
import { TuiFilterModule, TuiInputModule, TuiIslandModule, TuiStepperModule } from '@taiga-ui/kit';
import { PlacementStepperComponent } from './components/stepper/stepper.component';

import { PlacementAddComponent } from './pages/add/add.component';
import { PlacementUpdateComponent } from './pages/update/update.component';
import { PlacementListComponent } from './pages/list/list.component';


import { PlacementStepTemplateComponent } from './components/step/template.component';
import { PlacementStepAreaComponent } from './components/step/area.component';
import { PlacementStepFinishComponent } from './components/step/finish.component';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { template, area, placement } from '@store/reducers';
import { StoreModule } from '@ngrx/store';
import { PlacementStepNameComponent } from './components/step/name.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlacementStepperComponent,
    PlacementStepNameComponent,

    PlacementAddComponent,
    PlacementUpdateComponent,
    PlacementListComponent,

    PlacementStepTemplateComponent,
    PlacementStepAreaComponent,
    PlacementStepFinishComponent
  ],
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
    StoreModule.forFeature(template.templateFeature),
    StoreModule.forFeature(area.areaFeature),
    StoreModule.forFeature(placement.placementFeature),

  ]
})
export class PlacementModule { }
