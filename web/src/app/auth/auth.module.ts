import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './_layout/auth-layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TuiRootModule,
    TuiIslandModule
  ]
})
export class AuthModule { }
