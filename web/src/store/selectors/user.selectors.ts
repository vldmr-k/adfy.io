import { createSelector } from '@ngrx/store';
import { userFeature } from "@store/reducers/user.reducer";

export const selectUserViewModel = createSelector(
  userFeature.selectUser,
  userFeature.selectLoading,
  (user, loading) => ({ user, loading })
);
