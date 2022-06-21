import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PbDatePipeModule, TwirpModule } from '@protobuf-ts/runtime-angular';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TwirpHttpInterceptor } from '@core/twirp-http.interceptor'

import { environment } from "environments/environment";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects"
import { UserServiceClient } from "@grpc/user/service.client";

import { log } from "@store/reducers/log-meta.reducer";
import { AuthenticateGuard, GuestGuard } from "@core/guard";

import {TUI_LANGUAGE, TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n';
import { of } from "rxjs";
import { ProjectServiceClient } from "@grpc/project/service.client";
import { AreaEffects, PlacementEffects, ProjectEffects, TemplateEffects, UserEffects } from "@store/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MediaServiceClient } from "@grpc/media/service.client";
import { MediaEffects } from "@store/effects/media.effects";
import { media, placement, project, template, user, area} from "@store/reducers"
import { AreaServiceClient } from "@grpc/area/service.client";
import { TemplateServiceClient } from "@grpc/template/service.client";
import { PlacementService } from "@grpc/placement/service";
import { PlacementServiceClient } from "@grpc/placement/service.client";

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

    StoreModule.forRoot({
      ...user.reducer,
      ...project.reducer,
      ...media.reducer,
      ...area.reducer,
      ...template.reducer,
      ...placement.reducer
    }),
    EffectsModule.forRoot([
      UserEffects,
      ProjectEffects,
      MediaEffects,
      TemplateEffects,
      PlacementEffects,
      AreaEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, autoPause: true }),
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: TUI_LANGUAGE, useValue: of(TUI_ENGLISH_LANGUAGE) },
    UserServiceClient,
    ProjectServiceClient,
    MediaServiceClient,
    AreaServiceClient,
    TemplateServiceClient,
    PlacementServiceClient,
    GuestGuard,
    AuthenticateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
}
