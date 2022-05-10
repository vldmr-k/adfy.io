
import { Inject, Injectable } from "@angular/core"
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { ProjectServiceClient } from '@grpc/project/service.client';
import * as projectActions from 'store/actions/project.actions';
import { Router } from "@angular/router";
import { Empty } from "@grpc/google/protobuf/empty";


@Injectable({ providedIn: 'root' })
export class ProjectEffects {

  constructor(
    private actions$: Actions,
    @Inject(ProjectServiceClient) private projectServiceClient: ProjectServiceClient
  ) { }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(projectActions.createRequest),
    mergeMap(
      (action) => from(this.projectServiceClient.create(action.request)).pipe(
        map((call) => projectActions.createSuccess({ response: call.response })),
        catchError((error) => of(projectActions.createError({ error: error })))
      )
    )
  ))

  update$ = createEffect(() => this.actions$.pipe(
    ofType(projectActions.updateRequest),
    mergeMap(
      (action) => from(this.projectServiceClient.update(action.request)).pipe(
        map((call) => projectActions.updateSuccess({ response: call.response })),
        catchError((error) => of(projectActions.updateError({ error: error })))
      )
    )
  ));


  all$ = createEffect(() => this.actions$.pipe(
    ofType(projectActions.allRequest),
    mergeMap(
      (action) => from(this.projectServiceClient.all(Empty)).pipe(
        map((call) => projectActions.allSuccess({response: call.response})),
        catchError((error) => of(projectActions.allError({error: error })))
      )
    )
  ))


  delete$ = createEffect(() => this.actions$.pipe(
    ofType(projectActions.deleteRequest),
    mergeMap(
      (action) => from(this.projectServiceClient.delete(action.request)).pipe(
        map((call) => projectActions.deleteSuccess()),
        catchError((error) => of(projectActions.deleteError({ error: error })))
      )
    )
  ));

}
