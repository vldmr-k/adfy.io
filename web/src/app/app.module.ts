import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PbDatePipeModule, TwirpModule } from '@protobuf-ts/runtime-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserServiceClient } from '@grpc/user/service.client';

import { ProjectServiceClient } from '@grpc/project/service.client';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,

    // Registers the `PbDatePipe`.
    // This pipe overrides the standard "date" pipe and adds support
    // for `google.protobuf.Timestamp` and `google.type.DateTime`.
    PbDatePipeModule,

     // Registers the `TwirpTransport` with the given options
    // and sets up dependency injection.
    TwirpModule.forRoot({
      // don't forget the "twirp" prefix if your server requires it
      baseUrl: "http://localhost:8080/twirp/",
    })
  ],
  providers: [
    UserServiceClient,
    ProjectServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
