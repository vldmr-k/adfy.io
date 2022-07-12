import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlacementAddComponent } from './pages/add/add.component';
import { PlacementListComponent } from './pages/list/list.component';
import { PlacementUpdateComponent } from './pages/update/update.component';


export const ROUTER_PLACEMENT_LIST = 'placement/list'
export const ROUTER_PLACEMENT_ADD = 'placement/add'
export const ROUTER_PLACEMENT_UPDATE = 'placement/:placementId/update'

const routes: Routes = [
  {
    path: ROUTER_PLACEMENT_UPDATE,
    component: PlacementUpdateComponent,
    pathMatch: 'full'
  },

  {
    path: ROUTER_PLACEMENT_ADD,
    component: PlacementAddComponent,
    pathMatch: 'full'
  },

  {
    path: ROUTER_PLACEMENT_LIST,
    component: PlacementListComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacementRoutingModule {
}
