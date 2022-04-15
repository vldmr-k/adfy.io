import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserTokenStorage } from './services/user-token-storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserTokenStorage
  ]
})
export class CoreModule {
  /**
     * Allows for retrieving singletons using `AppModule.injector.get(MyService)`
     * This is good to prevent injecting the service as constructor parameter.
     */
   static injector: Injector;

   constructor(injector: Injector) {
    CoreModule.injector = injector;
}
}
