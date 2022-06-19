import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlacementStepperComponent } from './components/stepper/stepper.component';
import { PlacementAddComponent } from './pages/add/add.component';

export const ROUTER_PLACEMENT_ADD = 'placement/add'


const routes: Routes = [
  { path: ROUTER_PLACEMENT_ADD, component: PlacementAddComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacementRoutingModule {
}
