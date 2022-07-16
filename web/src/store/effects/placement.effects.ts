
import { Inject, Injectable } from "@angular/core"
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import {mergeMap, map, catchError, tap} from 'rxjs/operators';
import { from, of } from 'rxjs'

import { PlacementServiceClient } from '@grpc/placement/service.client';
import { placementActions }  from '@store/actions';
import { Store } from "@ngrx/store";
import * as projectActions from "@store/actions/project.actions";


@Injectable({ providedIn: 'root' })
export class PlacementEffects {

  constructor(
    private actions$: Actions,
    @Inject(Store) private store: Store,
    @Inject(PlacementServiceClient) private placementServiceClient: PlacementServiceClient
  ) { }

  get$ = createEffect(() => this.actions$.pipe(
    ofType(placementActions.getRequest),
    mergeMap(
      (action) => from(this.placementServiceClient.get(action.request)).pipe(
        map((call) => placementActions.getSuccess({ response: call.response })),
        catchError((error) => of(placementActions.getError({ error: error })))
      )
    )
  ));

  list$ = createEffect(() => this.actions$.pipe(
    ofType(placementActions.listRequest),
    mergeMap(
      (action) => from(this.placementServiceClient.list(action.request)).pipe(
        map((call) => placementActions.listSuccess({ response: call.response })),
        catchError((error) => of(placementActions.getAllByProjectError({ error: error })))
      )
    )
  ));

  create$ = createEffect(() => this.actions$.pipe(
    ofType(placementActions.createRequest),
    mergeMap(
      (action) => from(this.placementServiceClient.create(action.request)).pipe(
        map((call) => placementActions.createSuccess({response: call.response})),
        catchError((error) => of(placementActions.createError({ error: error })))
      )
    )
  ))

  edit$ = createEffect(() => this.actions$.pipe(
    ofType(placementActions.editRequest),
    mergeMap(
      (action) => from(this.placementServiceClient.edit(action.request)).pipe(
        map((call) => placementActions.editSuccess({ response: call.response })),
        catchError((error) => of(placementActions.editError({ error: error })))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(placementActions.deleteRequest),
    mergeMap(
      (action) => from(this.placementServiceClient.delete(action.request)).pipe(
        map((call) => placementActions.deleteSuccess()),
        tap((call) => { this.store.dispatch(placementActions.listRequest({request: {}}))}),
        catchError((error) => of(placementActions.deleteError({ error: error })))
      )
    )
  ));

}
