import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { TuiAlertService } from '@taiga-ui/core';
import { UserTokenStorage } from '@core/services/user-token.service';

@Injectable()
export class GuestGuard implements CanActivate {


  constructor(
    private readonly auth: AuthService,
    private readonly userTokenStorage: UserTokenStorage,
    private readonly router: Router,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService) { }


  canActivate(): boolean {
    if (this.userTokenStorage.isAuthenticated()) {
      this.router.navigate(['account']);
      return false;
    }

    return true;
  }
}
