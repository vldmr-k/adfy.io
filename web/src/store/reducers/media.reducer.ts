import {mediaActions} from  "@store/actions/index";
import { Media } from "@store/models/index";

export const STORE_MEDIA_KEY = 'media';

import { createReducer, createFeature, on } from '@ngrx/store';

export interface MediaState {
  media: Media | null,
  list: Media[],
  selectedMedia: Media | null,
  error: object | null,
  loading: boolean
}

export const initialState: MediaState = {
  media: null,
  list: [],
  selectedMedia: null,
  error: null,
  loading: false,
};



export const mediaFeature = createFeature({
  name: STORE_MEDIA_KEY,
  reducer: createReducer(
    initialState,

    on(mediaActions.allRequest, (state) => ({ ...state, loading: true })),
    on(mediaActions.allSuccess, (state, action) => ({ ...state, list: action.response.medias , loading: false })),
    on(mediaActions.allError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(mediaActions.uploadRequest, (state) => ({ ...state, loading: true })),
    on(mediaActions.uploadSuccess, (state, action) => ({ ...state, media: action.response.media! , loading: false })),
    on(mediaActions.uploadError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(mediaActions.getRequest, (state) => ({ ...state, loading: true })),
    on(mediaActions.getSuccess, (state, action) => ({ ...state, media: action.response.media! , loading: false })),
    on(mediaActions.getError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(mediaActions.deleteRequest, (state) => ({ ...state, loading: true })),
    on(mediaActions.deleteSuccess, (state, action) => ({ ...state, loading: false })),
    on(mediaActions.deleteError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(mediaActions.selectedMedia, (state, action) => ({ ...state, selectedMedia: action.media })),
    on(mediaActions.resetSelectedMedia, (state, action) => ({ ...state, selectedMedia: null }))

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
  selectSelectedMedia,
} = mediaFeature;
