
import { Inject, Injectable } from "@angular/core"
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { User } from '@store/models/user.model';
import { UserServiceClient } from '@grpc/user/service.client';
import { SignInRequest } from '@grpc/user/service';
import * as userActions from 'store/actions/user.actions';


let request: SignInRequest = {
  email: "tess",
  password: "password"
}

@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(
    private actions$: Actions,
    @Inject(UserServiceClient) private userServiceClient: UserServiceClient
    ) {}

  singIn$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.signInRequest),
    mergeMap((action) => from(this.userServiceClient.signIn(action.request)).pipe(
          map(
            (response) => userActions.signInSuccess({ response: response.response })
          ),
          catchError((response) => of(userActions.signInError({ response: response })))
        )
      )

  ))
}
