
import { Inject, Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs'

import { MediaServiceClient } from '@grpc/media/service.client';
import { mediaActions }  from '@store/actions/index';
import { Empty } from "@grpc/google/protobuf/empty";
import { Store } from "@ngrx/store";


@Injectable({ providedIn: 'root' })
export class MediaEffects {

  constructor(
    private actions$: Actions,
    @Inject(Store) private store: Store,
    @Inject(MediaServiceClient) private mediaServiceClient: MediaServiceClient
  ) { }


  all$ = createEffect(() => this.actions$.pipe(
    ofType(mediaActions.allRequest),
    mergeMap(
      (action) => from(this.mediaServiceClient.all(Empty)).pipe(
        map((call) => mediaActions.allSuccess({response: call.response})),
        catchError((error) => of(mediaActions.allError({error: error })))
      )
    )
  ))


  delete$ = createEffect(() => this.actions$.pipe(
    ofType(mediaActions.deleteRequest),
    mergeMap(
      (action) => from(this.mediaServiceClient.delete(action.request)).pipe(
        map((call) => mediaActions.deleteSuccess()),
        catchError((error) => of(mediaActions.deleteError({ error: error })))
      )
    )
  ))
}
