import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TuiErrorModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PbDatePipeModule, TwirpModule } from '@protobuf-ts/runtime-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import { UserServiceClient } from '@grpc/user/service.client';
import { ProjectServiceClient } from '@grpc/project/service.client';

import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { addAuthHeaderInterceptor } from "./modules/core/interceptors/auth.interceptor";
import { CoreModule } from "@module/core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    AuthModule,
    DashboardModule,


    // Registers the `PbDatePipe`.
    // This pipe overrides the standard "date" pipe and adds support
    // for `google.protobuf.Timestamp` and `google.type.DateTime`.
    PbDatePipeModule,

     // Registers the `TwirpTransport` with the given options
    // and sets up dependency injection.
    TwirpModule.forRoot({
      baseUrl: "http://localhost:8080/twirp/",
      interceptors: [
        addAuthHeaderInterceptor
      ]
    }),
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule,
      TuiErrorModule
],
  providers: [
    UserServiceClient,
    ProjectServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
