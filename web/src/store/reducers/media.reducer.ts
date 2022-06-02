import {mediaActions} from  "@store/actions/index";
import { Media } from "@store/models/index";

export const STORE_MEDIA_KEY = 'media';

import { createReducer, createFeature, on } from '@ngrx/store';

export interface MediaState {
  media: Media | null,
  list: Media[] | null,
  error: null,
  loading: boolean
}

export const initialState: MediaState = {
  media: null,
  list: [],
  error: null,
  loading: false,
};



export const projectFeature = createFeature({
  name: STORE_MEDIA_KEY,
  reducer: createReducer(
    initialState,

    on(mediaActions.uploadRequest, (state) => ({ ...state, loading: true })),
    on(mediaActions.uploadSuccess, (state, action) => ({ ...state, media: action.response.media! , loading: false })),
    on(mediaActions.uploadError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(mediaActions.getRequest, (state) => ({ ...state, loading: true })),
    on(mediaActions.getSuccess, (state, action) => ({ ...state, media: action.response.media! , loading: false })),
    on(mediaActions.getError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(mediaActions.deleteRequest, (state) => ({ ...state, loading: true })),
    on(mediaActions.deleteSuccess, (state, action) => ({ ...state, loading: false })),
    on(mediaActions.deleteError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectMediaState,
  selectMedia,
  selectList,
  selectError,
  selectLoading,
} = projectFeature;
