import * as userActions from  "@store/actions/user.actions";
import { User } from "@store/models/index";

export const STORE_USER_KEY = 'user';


import { createReducer, createFeature, on } from '@ngrx/store';

export interface UserState {
  user: User | null,
  errorResponse: null,
  loading: boolean
}

export const initialState: UserState = {
  user: null,
  errorResponse: null,
  loading: false,
};



export const userFeature = createFeature({
  name: STORE_USER_KEY,
  reducer: createReducer(
    initialState,

    on(userActions.signInRequest, (state) => ({ ...state, loading: true })),
    on(userActions.signInSuccess, (state, action) => ({ ...state, loading: false })),
    on(userActions.signInError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(userActions.meRequest, state => ({ ...state, loading: true })),
    on(userActions.meSuccess, (state, action) => ({ ...state, user: action.user, loading: false })),
    on(userActions.meError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUserState,
  selectUser,
  selectLoading,
  selectErrorResponse
} = userFeature;
