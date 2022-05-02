import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesLayoutComponent } from './_layout/pages-layout.component';
import { NotFoundComponent } from './_error/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesLayoutComponent,
  children: [
    {
      path: 'project',
      loadChildren: () => import('@pages/project/project.module')
        .then(m => m.ProjectModule),
    },
    { path: '', redirectTo: 'project', pathMatch: 'full',},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
