import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { TuiButtonModule, TuiErrorModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiFilterByInputPipeModule, TuiInputModule } from '@taiga-ui/kit';
import { CoreModule } from '../core/core.module';
import { AuthLayoutComponent } from 'app/_layout/auth/auth-layout.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    SignInComponent,
    ForgotComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TuiNotificationModule,
    TuiInputModule,
    TuiButtonModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiFilterByInputPipeModule
  ]
})
export class AuthModule { }
