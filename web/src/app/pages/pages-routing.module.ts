import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesLayoutComponent } from './_layout/pages-layout.component';
import { NotFoundComponent } from './_error/not-found.component';
import { ROUTE_PROJECT_LIST } from './project/project-routing.module';

const routes: Routes = [{
  path: '',
  component: PagesLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('@pages/project/project.module').then(m => m.ProjectModule),
    },
    {
      path: '',
      loadChildren: () => import('@pages/placement/placement.module').then(m => m.PlacementModule)
    },
    {
      path: 'block',
      loadChildren: () => import('@pages/block/block.module')
        .then(m => m.BlockModule),
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
