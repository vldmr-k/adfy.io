
import { Inject, Injectable } from "@angular/core"
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, switchMap, tap, withLatestFrom, concatMap } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { User } from '@store/models/index';
import { UserServiceClient } from '@grpc/user/service.client';
import * as userActions from 'store/actions/user.actions';
import { UserTokenStorage } from "@core/services/user-token.service";
import { Empty } from "@grpc/google/protobuf/empty";
import { Router } from "@angular/router";
import { TuiAlertService } from "@taiga-ui/core";
import { Logger } from "@core/logger";


@Injectable({ providedIn: 'root' })
export class UserEffects {

    constructor(
        private actions$: Actions,
        private readonly router: Router,
        @Inject(UserServiceClient) private userServiceClient: UserServiceClient,
        @Inject(UserTokenStorage) private userTokenStorage: UserTokenStorage,
        @Inject(TuiAlertService) private readonly alertService: TuiAlertService
    ) { }

    singIn$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.signInRequest),
        mergeMap((action) => from(this.userServiceClient.signIn(action.request)).pipe(
            map((call) => userActions.signInSuccess({ response: call.response })),
            catchError((error) => of(userActions.signInError({ error: error })))
        )
        )
    ))

    singInSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.signInSuccess),
        tap((call) => {
          this.userTokenStorage.setToken(call.response.token);
          this.alertService.open('success');
        }),
        tap((call) => {
          Logger.debug('CLASS', 'METHOD', `Begin redirect to /`);
          this.router.navigateByUrl("/").then(() => {
            window.location.reload();
          });
        })
    ), { dispatch: false });

    loadMe$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.meRequest),
        mergeMap((action) => from(this.userServiceClient.me(Empty)).pipe(
            map((call) => {
                return userActions.meSuccess({ user: call.response.user! })
            }),
            catchError((error) => of(userActions.meError({ error: error })))
        )
        )
    ))

    loadMeError$ = createEffect(() => this.actions$.pipe(ofType(userActions.meError)))
        .subscribe(error => {
            this.userTokenStorage.removeToken()
            this.alertService.open("test")
            this.router.navigate(['/'])

        })
}
