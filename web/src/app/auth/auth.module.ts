import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './_layout/auth-layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TuiAlertModule, TuiButtonModule, TuiErrorModule, TuiRootModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceClient } from '@grpc/user/service.client';
import { StoreModule } from '@ngrx/store';
import { userFeature } from '@store/reducers/user.reducer';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiIslandModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiButtonModule,
    TuiAlertModule,
    StoreModule.forFeature(userFeature)
  ]
})
export class AuthModule { }
