import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacementRoutingModule } from './placement-routing.module'
import { TuiIslandModule, TuiStepperModule } from '@taiga-ui/kit';
import { PlacementStepperComponent } from './components/stepper/stepper.component';
import { PlacementAddComponent } from './pages/add/add.component';
import { PlacementStepTemplateComponent } from './components/step/template.component';
import { PlacementStepAreaComponent } from './components/step/area.component';
import { PlacementStepFinishComponent } from './components/step/finish.component';
import { TuiLoaderModule } from '@taiga-ui/core';
import { template, area } from '@store/reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    PlacementStepperComponent,
    PlacementAddComponent,
    PlacementStepTemplateComponent,
    PlacementStepAreaComponent,
    PlacementStepFinishComponent
  ],
  imports: [
    CommonModule,
    PlacementRoutingModule,
    TuiStepperModule,
    TuiIslandModule,
    TuiLoaderModule,

    StoreModule.forFeature(template.templateFeature),
    StoreModule.forFeature(area.areaFeature),

  ]
})
export class PlacementModule { }
