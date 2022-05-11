import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as user from '@store/reducers/user.reducer';
import * as project from '@store/reducers/project.reducer';


export interface State {
  [user.STORE_USER_KEY]: user.UserState,
  [project.STORE_PROJECT_KEY]: project.ProjectState
}
