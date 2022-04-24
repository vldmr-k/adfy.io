import * as userActions from  "@store/actions/user.actions";
import { User } from "store/models/user.model";


import { createReducer, createFeature, on } from '@ngrx/store';

export interface State {
  user: User | null,
  sinInResponse: any,
  singInError: any,
  loading: boolean
}

export const initialState: State = {
  user: null,
  sinInResponse: null,
  singInError: null,
  loading: false,
};



export const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,

    on(userActions.signInRequest, (state) => ({ ...state, loading: true })),
    on(userActions.signInSuccess, (state, action) => ({ ...state, sinInResponse: state.sinInResponse, loading: false })),
    on(userActions.signInError, state => ({ ...state, loading: false })),

    on(userActions.meRequest, state => ({ ...state, loading: true })),
    on(userActions.meSuccess, state => ({ ...state, user: state.user, loading: false })),
    on(userActions.meError, state => ({ ...state, singInError: state.singInError, loading: false })),
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUserState,
  selectUser,
  selectLoading
} = userFeature;
