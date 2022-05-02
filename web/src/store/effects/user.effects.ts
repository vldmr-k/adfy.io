
import { Inject, Injectable } from "@angular/core"
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';

import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { User } from '@store/models/user.model';
import { UserServiceClient } from '@grpc/user/service.client';
import { MeResponse } from '@grpc/user/service';
import { SignInRequest } from '@grpc/user/service';
import * as userActions from 'store/actions/user.actions';
import { UserTokenStorage } from "@core/services/user-token.service";
import { Empty } from "@grpc/google/protobuf/empty";
import { Router } from "@angular/router";
import { TuiAlertService } from "@taiga-ui/core";


@Injectable({ providedIn: 'root' })
export class UserEffects {

  constructor(
    private actions$: Actions,
    private readonly router : Router,
    @Inject(UserServiceClient) private userServiceClient: UserServiceClient,
    @Inject(UserTokenStorage)  private userTokenStorage: UserTokenStorage,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService
    ) {}

  singIn$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.signInRequest),
    mergeMap((action) => from(this.userServiceClient.signIn(action.request)).pipe(
          map((call) => userActions.signInSuccess({ response: call.response })),
          catchError((error) => of(userActions.signInError({ error: error })))
        )
      )
  ))

  singInSuccess$ = createEffect(() => this.actions$.pipe(ofType(userActions.signInSuccess))).subscribe(
    response => {
      this.userTokenStorage.setToken(response.response.token)
      this.alertService.open("success")
      this.router.navigate(['account'])
    }
  );

  loadMe$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.meRequest),
    mergeMap((action) => from(this.userServiceClient.me(Empty)).pipe(
          map((call) => {
            const user : User = call.response
            return userActions.meSuccess({ user: user })
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
