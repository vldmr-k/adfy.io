import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { TuiAlertService } from '@taiga-ui/core';
import { UserTokenStorage } from '@core/services/user-token.service';
import { Logger } from '@core/logger';
import { PROJECT_LIST } from '@pages/project/project-routing.module';

@Injectable()
export class GuestGuard implements CanActivate {


  constructor(
    private readonly auth: AuthService,
    private readonly userTokenStorage: UserTokenStorage,
    private readonly router: Router,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService) { }


  canActivate(): boolean {
    if (this.userTokenStorage.isAuthenticated()) {
      this.router.navigate([PROJECT_LIST]);
      return false;
    }

    return true;
  }
}
