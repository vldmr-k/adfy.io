import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PbDatePipeModule, TwirpModule } from '@protobuf-ts/runtime-angular';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TwirpHttpInterceptor } from '@core/twirp-http.interceptor'

import { environment } from "environments/environment";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects"
import { UserEffects } from "store/effects/user.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,

    // Registers the `PbDatePipe`.
    // This pipe overrides the standard "date" pipe and adds support
    // for `google.protobuf.Timestamp` and `google.type.DateTime`.
    PbDatePipeModule,

     // Registers the `TwirpTransport` with the given options
    // and sets up dependency injection.
    TwirpModule.forRoot({
      baseUrl: environment.twirp.baseUrl,
      interceptors: [
        TwirpHttpInterceptor.addBearerToken()
      ]
    }),

     StoreModule.forRoot({}, {}),
     EffectsModule.forRoot([UserEffects])
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
