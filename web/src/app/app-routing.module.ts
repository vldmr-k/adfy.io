import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesLayoutComponent } from '@pages/_layout/pages-layout.component';

import { AuthLayoutComponent } from '@auth/_layout/auth-layout.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('@pages/pages.module')
          .then(m => m.PagesModule),
  },
  {

    path: 'auth',
    loadChildren: () => import('@auth/auth.module')
          .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
