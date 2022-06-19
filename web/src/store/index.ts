import * as user from '@store/reducers/user.reducer';
import * as project from '@store/reducers/project.reducer';
import * as media from '@store/reducers/media.reducer';

export interface State {
  [user.STORE_USER_KEY]: user.UserState,
  [project.STORE_PROJECT_KEY]: project.ProjectState,
  [media.STORE_MEDIA_KEY]: media.MediaState
}
