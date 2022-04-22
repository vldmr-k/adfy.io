import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as user from '@store/reducers/user.reducer';

export interface State {
  user: user.UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: user.reducer,
};
