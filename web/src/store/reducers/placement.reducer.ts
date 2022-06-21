import { placementActions } from  "@store/actions";
import { Placement } from "@store/models/index";

export const STORE_PLACEMENT_KEY = 'placement';

import { createReducer, createFeature, on } from '@ngrx/store';

export interface PlacementState {
  placement: Placement | null,
  list: Placement[] | null,
  error: null,
}

export const initialState: PlacementState = {
  placement: null,
  list: [],
  error: null
};



export const placementFeature = createFeature({
  name: STORE_PLACEMENT_KEY,
  reducer: createReducer(
    initialState,

    on(placementActions.createRequest, (state) => ({ ...state, loading: true })),
    on(placementActions.createSuccess, (state, action) => ({ ...state, template: action.response.placement! })),
    on(placementActions.createError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(placementActions.getRequest, (state) => ({ ...state, loading: true })),
    on(placementActions.getSuccess, (state, action) => ({ ...state, template: action.response.placement! })),
    on(placementActions.getError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(placementActions.getAllByProjectRequest, (state) => ({ ...state, loading: true })),
    on(placementActions.getAllByProjectSuccess, (state, action) => ({ ...state, list: action.response.placements! })),
    on(placementActions.getAllByProjectError, (state, action) => ({ ...state, errorResponse: action.error, loading: false })),

    on(placementActions.editRequest, (state) => ({ ...state })),
    on(placementActions.editSuccess, (state, action) => ({ ...state, placement: action.response.placement! })),
    on(placementActions.editError, (state, action) => ({ ...state, errorResponse: action.error })),

    on(placementActions.deleteRequest, (state) => ({ ...state })),
    on(placementActions.deleteSuccess, (state, action) => ({ ...state })),
    on(placementActions.deleteError, (state, action) => ({ ...state, errorResponse: action.error })),

  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectPlacement,
  selectPlacementState,
  selectList,
  selectError,
} = placementFeature;
