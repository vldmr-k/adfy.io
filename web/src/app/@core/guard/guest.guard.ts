import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { TuiAlertService } from '@taiga-ui/core';
import { UserTokenStorage } from '@core/services/user-token.service';
import { Logger } from '@core/logger';

@Injectable()
export class GuestGuard implements CanActivate {


  constructor(
    private readonly auth: AuthService,
    private readonly userTokenStorage: UserTokenStorage,
    private readonly router: Router,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService) { }


  canActivate(): boolean {
    if (this.userTokenStorage.isAuthenticated()) {
      Logger.debug('GuestGuard', 'canActivate', `Use is authenticate`);
      this.router.navigate(['account']);
      return false;
    }

    Logger.debug('GuestGuard', 'canActivate', `User is not authenticate`);

    return true;
  }
}
