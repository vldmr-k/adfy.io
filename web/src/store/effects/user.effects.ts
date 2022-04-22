
import {
  UserActionTypes
} from '@store/actions/user.actions';

import { Injectable } from "@angular/core"
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { User } from '@store/models/user.model';
import { UserServiceClient } from '@grpc/user/service.client';
import { SignInRequest } from '@grpc/user/service';
import { SignInError, SignInSuccess } from 'store/actions/user.actions';


let request: SignInRequest = {
  email: "tess",
  password: "password"
}



@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(private actions$: Actions, private userServiceClient: UserServiceClient) {}

  singIn$ = this.actions$.pipe(
    ofType(UserActionTypes.SignInRequest),
    mergeMap((action) =>
      from(this.userServiceClient.signIn(request)).pipe(
          map(
            (response) =>
              new SignInSuccess({ response: response.response })
          ),
          catchError(() => of(new SignInError()))
        )
      )

  );
}
