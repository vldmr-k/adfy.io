import { props, createAction } from '@ngrx/store';

import { User } from '@store/models/user.model';

import * as grpc from '@grpc/user/service';

export const signInRequest = createAction('[User] Sign In Request', props<{ request: grpc.SignInRequest;}>());
export const signInSuccess = createAction('[User] Sign In Success', props<{ response: grpc.SignInResponse;}>());
export const signInError = createAction('[User] Sign In Error');

export const meRequest = createAction('[User] Me Request');
export const meSuccess = createAction('[User] Me Success', props<{ response: grpc.MeResponse;}>());
export const meError = createAction('[User] Me Error');

