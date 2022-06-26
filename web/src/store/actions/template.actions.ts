import { props, createAction } from '@ngrx/store';

import { Template }  from "@store/models"

import * as grpc from '@grpc/template/service';

export const getRequest = createAction('[Template] Get Request', props<{ request: grpc.IdRequest;}>());
export const getSuccess = createAction('[Template] Get Success', props<{ response: grpc.GetResponse;}>());
export const getError   = createAction('[Template] Get Error', props<{ error: any;}>());

export const listRequest = createAction('[Template] List Request');
export const listSuccess = createAction('[Template] List Response', props<{ response: grpc.ListResponse;}>());
export const listError = createAction('[Template] List Error', props<{ error: any;}>());
