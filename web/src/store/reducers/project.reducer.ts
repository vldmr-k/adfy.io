import * as projectActions from  "@store/actions/project.actions";
import { Project } from "@store/models/index";

export const STORE_PROJECT_KEY = 'project';

import { createReducer, createFeature, on } from '@ngrx/store';

export interface ProjectState {
  project: Project,
  list: Project[] | null,
  error: null
}

export const initialState: ProjectState = {
  project: null,
  list: [],
  error: null
};



export const projectFeature = createFeature({
  name: STORE_PROJECT_KEY,
  reducer: createReducer(
    initialState,

    on(projectActions.createRequest, (state) => ({ ...state })),
    on(projectActions.createSuccess, (state, action) => ({ ...state })),
    on(projectActions.createError, (state, action) => ({ ...state, errorResponse: action.error })),

    on(projectActions.getRequest, (state) => ({ ...state, loading: true })),
    on(projectActions.getSuccess, (state, action) => ({ ...state, loading: false, project: action.response.project ?? null })),
    on(projectActions.getError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(projectActions.listRequest, (state) => ({ ...state, loading: true })),
    on(projectActions.listSuccess, (state, action) => ({ ...state, loading: false, list: action.response.projects })),
    on(projectActions.listError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(projectActions.updateRequest, (state) => ({ ...state, loading: true })),
    on(projectActions.updateSuccess, (state, action) => ({ ...state, loading: false, project: action.response.project ?? null })),
    on(projectActions.updateError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(projectActions.deleteRequest, (state) => ({ ...state, loading: true })),
    on(projectActions.deleteSuccess, (state, action) => ({ ...state, loading: false })),
    on(projectActions.deleteError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectProjectState,
  selectProject,
  selectList,
  selectError,
} = projectFeature;
