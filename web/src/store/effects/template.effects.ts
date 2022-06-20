
import { Inject, Injectable } from "@angular/core"
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { TemplateServiceClient } from '@grpc/template/service.client';
import { templateActions }  from '@store/actions';
import { Router } from "@angular/router";
import { Empty } from "@grpc/google/protobuf/empty";
import { Store } from "@ngrx/store";


@Injectable({ providedIn: 'root' })
export class TemplateEffects {

  constructor(
    private actions$: Actions,
    @Inject(Store) private store: Store,
    @Inject(TemplateServiceClient) private templateServiceClient: TemplateServiceClient
  ) { }

  get$ = createEffect(() => this.actions$.pipe(
    ofType(templateActions.getRequest),
    mergeMap(
      (action) => from(this.templateServiceClient.get(action.request)).pipe(
        map((call) => templateActions.getSuccess({ response: call.response })),
        catchError((error) => of(templateActions.getError({ error: error })))
      )
    )
  ));


  list$ = createEffect(() => this.actions$.pipe(
    ofType(templateActions.listRequest),
    mergeMap(
      (action) => from(this.templateServiceClient.list(Empty)).pipe(
        map((call) => templateActions.listSuccess({response: call.response})),
        catchError((error) => of(templateActions.listError({ error: error })))
      )
    )
  ))
}
