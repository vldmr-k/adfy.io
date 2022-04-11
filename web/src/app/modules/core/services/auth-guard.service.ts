import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { TuiNotificationsService } from '@taiga-ui/core';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    @Inject(TuiNotificationsService) private readonly notificationsService: TuiNotificationsService) { }


  canActivate(): boolean {
    console.log("test")
    if (!this.auth.isAuthenticated()) {
      this.notificationsService
	            .show('Please sign in to profile', {
	                label: 'Authentication',
	            })
	            .subscribe();

      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
}
