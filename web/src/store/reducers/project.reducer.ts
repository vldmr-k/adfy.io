import * as projectActions from  "@store/actions/project.actions";
import { Project } from "@store/models/index";


import { createReducer, createFeature, on } from '@ngrx/store';

export interface ProjectState {
  project: Project | null,
  list: Project[] | null,
  error: null,
  loading: boolean
}

export const initialState: ProjectState = {
  project: null,
  list: [],
  error: null,
  loading: false,
};



export const projectFeature = createFeature({
  name: 'project',
  reducer: createReducer(
    initialState,

    on(projectActions.createRequest, (state) => ({ ...state, loading: true })),
    on(projectActions.createSuccess, (state, action) => ({ ...state, loading: false })),
    on(projectActions.createError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(projectActions.getRequest, (state) => ({ ...state, loading: true })),
    on(projectActions.getSuccess, (state, action) => ({ ...state, loading: false, project: action.response.project ?? null })),
    on(projectActions.getError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(projectActions.allRequest, (state) => ({ ...state, loading: true })),
    on(projectActions.allSuccess, (state, action) => ({ ...state, loading: false, list: action.response.projects })),
    on(projectActions.allError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

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
  selectLoading,
} = projectFeature;
