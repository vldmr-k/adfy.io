import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacementRoutingModule } from './placement-routing.module'
import { TuiStepperModule } from '@taiga-ui/kit';
import { PlacementStepperComponent } from './components/stepper/stepper.component';
import { PlacementAddComponent } from './pages/add/add.component';
import { PlacementStepTemplateComponent } from './components/step/template.component';
import { PlacementStepAreaComponent } from './components/step/area.component';
import { PlacementStepFinishedComponent } from './components/step/finished.component';

@NgModule({
  declarations: [
    PlacementStepperComponent,
    PlacementAddComponent,
    PlacementStepTemplateComponent,
    PlacementStepAreaComponent,
    PlacementStepFinishedComponent
  ],
  imports: [
    CommonModule,
    PlacementRoutingModule,
    TuiStepperModule
  ]
})
export class PlacementModule { }
