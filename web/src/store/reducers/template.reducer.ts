import { templateActions } from  "@store/actions";
import { Template } from "@store/models/index";

export const STORE_TEMPLATE_KEY = 'template';

import { createReducer, createFeature, on } from '@ngrx/store';

export interface TemplateState {
  template: Template | null,
  list: Template[] | null,
  error: null,
}

export const initialState: TemplateState = {
  template: null,
  list: [],
  error: null
};



export const templateFeature = createFeature({
  name: STORE_TEMPLATE_KEY,
  reducer: createReducer(
    initialState,

    on(templateActions.getRequest, (state) => ({ ...state, loading: true })),
    on(templateActions.getSuccess, (state, action) => ({ ...state, template: action.response.template! })),
    on(templateActions.getError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(templateActions.listRequest, (state) => ({ ...state, loading: true })),
    on(templateActions.listSuccess, (state, action) => ({ ...state, list: action.response.templates })),
    on(templateActions.listError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTemplate,
  selectTemplateState,
  selectList,
  selectError,
} = templateFeature;
