import * as userActions from  "@store/actions/user.actions";
import { User } from "store/models/user.model";


import { createReducer, createFeature, on } from '@ngrx/store';

interface State {
  user: any,
  loading: boolean
}

export const initialState: State = {
  user: {},
  loading: false,
};



export const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,

    on(userActions.meRequest, state => ({ ...state, loading: true })),
    on(userActions.meSuccess, state => ({ ...state, user: state.user })),
    on(userActions.meError, state => ({ ...state, loading: false })),
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectUserState,
  selectUser,
  selectLoading
} = userFeature;
