import { props, createAction } from '@ngrx/store';

import * as grpc from '@grpc/project/service';

export const createRequest = createAction('[Project] Create Request', props<{ request: grpc.CreateRequest;}>());
export const createSuccess = createAction('[Project] Create Success', props<{ response: grpc.CreateResponse;}>());
export const createError = createAction('[Project] Create Error', props<{ error: any;}>());

export const getRequest = createAction('[Project] Get Request', props<{ request: grpc.IdRequest;}>());
export const getSuccess = createAction('[Project] Get Response', props<{ response: grpc.GetResponse;}>());
export const getError = createAction('[Project] Get Error', props<{ error: any;}>());

export const listRequest = createAction('[Project] List Request');
export const listSuccess = createAction('[Project] List Response', props<{ response: grpc.ListResponse;}>());
export const listError = createAction('[Project] List Error', props<{ error: any;}>());


export const updateRequest = createAction('[Project] Edit Request', props<{ request: grpc.UpdateRequest;}>());
export const updateSuccess = createAction('[Project] Edit Success', props<{ response: grpc.UpdateResponse;}>());
export const updateError = createAction('[Project] Edit Error', props<{ error: any;}>());

export const deleteRequest = createAction('[Project] Delete Request', props<{ request: grpc.IdRequest;}>());
export const deleteSuccess = createAction('[Project] Delete Success');
export const deleteError = createAction('[Project] Delete Error', props<{ error: any;}>());
