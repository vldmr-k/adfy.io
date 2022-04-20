import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserTokenStorage } from './services/user-token-storage.service';

@NgModule({
  declarations: [

  ],
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

}
