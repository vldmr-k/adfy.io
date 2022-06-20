import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacementRoutingModule } from './placement-routing.module'
import { TuiStepperModule } from '@taiga-ui/kit';
import { PlacementStepperComponent } from './components/stepper/stepper.component';
import { PlacementAddComponent } from './pages/add/add.component';
import { PlacementStepTemplateComponent } from './components/step/template.component';

@NgModule({
  declarations: [
    PlacementStepperComponent,
    PlacementAddComponent,
    PlacementStepTemplateComponent
  ],
  imports: [
    CommonModule,
    PlacementRoutingModule,
    TuiStepperModule
  ]
})
export class PlacementModule { }
