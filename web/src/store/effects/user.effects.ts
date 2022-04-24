
import { Inject, Injectable } from "@angular/core"
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';

import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { User } from '@store/models/user.model';
import { UserServiceClient } from '@grpc/user/service.client';
import { SignInRequest } from '@grpc/user/service';
import * as userActions from 'store/actions/user.actions';
import { UserTokenStorage } from "@core/services/user-token.service";
import { Empty } from "@grpc/google/protobuf/empty";


@Injectable({ providedIn: 'root' })
export class UserEffects {

  constructor(
    private actions$: Actions,
    @Inject(UserServiceClient) private userServiceClient: UserServiceClient,
    @Inject(UserTokenStorage)  private userTokenStorage: UserTokenStorage,
    ) {}

  singIn$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.signInRequest),
    mergeMap((action) => from(this.userServiceClient.signIn(action.request)).pipe(
          map((response) => userActions.signInSuccess({ response: response.response })),
          catchError((response) => of(userActions.signInError({ response: response })))
        )
      )
  ))

  singInSuccess$ = createEffect(() => this.actions$.pipe(ofType(userActions.signInSuccess))).subscribe(
    response => this.userTokenStorage.setToken(response.response.token)
  );

  loadMe$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.meRequest),
    mergeMap((action) => from(this.userServiceClient.me(Empty)).pipe(
          map((response) => userActions.meSuccess({ user: <User>response.response })),
          catchError((response) => of(userActions.signInError({ response: response })))
        )
      )
  ))
}
