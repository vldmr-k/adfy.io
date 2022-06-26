import {user, project, media, area, template, placement} from '@store/reducers/index'

export interface State {
  [user.STORE_USER_KEY]: user.UserState,
  [project.STORE_PROJECT_KEY]: project.ProjectState,
  [media.STORE_MEDIA_KEY]: media.MediaState,
  [area.STORE_AREA_KEY]: area.AreaState,
  [template.STORE_TEMPLATE_KEY]: template.TemplateState,
  [placement.STORE_PLACEMENT_KEY]: placement.PlacementState
}
