import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthLayoutComponent } from '@auth/_layout/auth-layout.component';
import { NotFoundComponent } from '@core/components/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'sign-in',
      component: SignInComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    },
    {
      path: '',
      redirectTo: 'sign-in',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
