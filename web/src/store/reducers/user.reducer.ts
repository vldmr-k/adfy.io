import * as userActions from  "@store/actions/user.actions";
import { User } from "store/models/user.model";


import { createReducer, createFeature, on } from '@ngrx/store';

export interface State {
  user: User | null,
  errorResponse: null,
  loading: boolean
}

export const initialState: State = {
  user: null,
  errorResponse: null,
  loading: false,
};



export const userFeature = createFeature({
  name: 'user',
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