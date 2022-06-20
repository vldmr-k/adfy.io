
import { Inject, Injectable } from "@angular/core"
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { AreaServiceClient } from '@grpc/area/service.client';
import { areaActions }  from '@store/actions';
import { Router } from "@angular/router";
import { Empty } from "@grpc/google/protobuf/empty";
import { Store } from "@ngrx/store";


@Injectable({ providedIn: 'root' })
export class AreaEffects {

  constructor(
    private actions$: Actions,
    @Inject(Store) private store: Store,
    @Inject(AreaServiceClient) private areaServiceClient: AreaServiceClient
  ) { }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(areaActions.createRequest),
    mergeMap(
      (action) => from(this.areaServiceClient.create(action.request)).pipe(
        map((call) => areaActions.createSuccess({ response: call.response })),
        catchError((error) => of(areaActions.createError({ error: error })))
      )
    )
  ));

  get$ = createEffect(() => this.actions$.pipe(
    ofType(areaActions.getRequest),
    mergeMap(
      (action) => from(this.areaServiceClient.get(action.request)).pipe(
        map((call) => areaActions.getSuccess({ response: call.response })),
        catchError((error) => of(areaActions.getError({ error: error })))
      )
    )
  ));

  getByProject$ = createEffect(() => this.actions$.pipe(
    ofType(areaActions.getByProjectRequest),
    mergeMap(
      (action) => from(this.areaServiceClient.getByProject(action.request)).pipe(
        map((call) => areaActions.getByProjectSuccess({ response: call.response })),
        catchError((error) => of(areaActions.getByProjectError({ error: error })))
      )
    )
  ));

  edit$ = createEffect(() => this.actions$.pipe(
    ofType(areaActions.editRequest),
    mergeMap(
      (action) => from(this.areaServiceClient.edit(action.request)).pipe(
        map((call) => areaActions.editSuccess({ response: call.response })),
        catchError((error) => of(areaActions.editError({ error: error })))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(areaActions.deleteRequest),
    mergeMap(
      (action) => from(this.areaServiceClient.delete(action.request)).pipe(
        map((call) => areaActions.deleteSuccess()),
        catchError((error) => of(areaActions.deleteError({ error: error })))
      )
    )
  ))
}
