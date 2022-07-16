import { areaActions } from  "@store/actions";
import { Area } from "@store/models/index";

export const STORE_AREA_KEY = 'area';

import { createReducer, createFeature, on } from '@ngrx/store';

export interface AreaState {
  area: Area | null,
  list: Area[],
  error: object | null,
}

export const initialState: AreaState = {
  area: null,
  list: [],
  error: null
};



export const areaFeature = createFeature({
  name: STORE_AREA_KEY,
  reducer: createReducer(
    initialState,

    on(areaActions.createRequest, (state) => ({ ...state, loading: true })),
    on(areaActions.createSuccess, (state, action) => ({ ...state, template: action.response.area! })),
    on(areaActions.createError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(areaActions.getRequest, (state) => ({ ...state, loading: true })),
    on(areaActions.getSuccess, (state, action) => ({ ...state, area: action.response.area! })),
    on(areaActions.getError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(areaActions.getByProjectRequest, (state) => ({ ...state, loading: true })),
    on(areaActions.getByProjectSuccess, (state, action) => ({ ...state, list: action.response.areas })),
    on(areaActions.getByProjectError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(areaActions.editRequest, (state) => ({ ...state })),
    on(areaActions.editSuccess, (state, action) => ({ ...state, placement: action.response.area! })),
    on(areaActions.editError, (state, action) => ({ ...state, errorResponse: action.error })),

    on(areaActions.deleteRequest, (state) => ({ ...state })),
    on(areaActions.deleteSuccess, (state, action) => ({ ...state })),
    on(areaActions.deleteError, (state, action) => ({ ...state, errorResponse: action.error })),

  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectArea,
  selectAreaState,
  selectList,
  selectError,
} = areaFeature;
