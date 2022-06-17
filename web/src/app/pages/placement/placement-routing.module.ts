import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlacementStepperComponent } from './components/stepper/stepper.component';
import { PlacementAddComponent } from './pages/add/add.component';

export const PLACEMENT_ADD = '/placement/add'


const routes: Routes = [
  { path: PLACEMENT_ADD, component: PlacementAddComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacementRoutingModule {
}
