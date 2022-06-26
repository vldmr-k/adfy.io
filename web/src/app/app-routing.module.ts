import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesLayoutComponent } from '@pages/_layout/pages-layout.component';

import { AuthLayoutComponent } from '@auth/_layout/auth-layout.component';
import { GuestGuard, AuthenticateGuard } from '@core/guard';
import { NotFoundComponent } from '@pages/_error/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/pages.module')
          .then(m => m.PagesModule),
    canActivate: [AuthenticateGuard]
  },
  {

    path: 'auth',
    loadChildren: () => import('@auth/auth.module')
          .then(m => m.AuthModule),
          canActivate: [GuestGuard]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
