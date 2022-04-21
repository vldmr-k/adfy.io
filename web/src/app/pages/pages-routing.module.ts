import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesLayoutComponent } from './_layout/pages-layout.component';
import { NotFoundComponent } from './_error/not-found.component';

const routes: Routes = [{
  path: 'account',
  component: PagesLayoutComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('@pages/dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
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
