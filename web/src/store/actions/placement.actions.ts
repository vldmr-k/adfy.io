import { props, createAction } from '@ngrx/store';

import * as grpc from '@grpc/placement/service';

import { Placement }  from "@store/models"

export const listRequest = createAction('[Placement] List Request', props<{ request: grpc.ListRequest; }>())
export const listSuccess = createAction('[Placement] List Success', props<{ response: grpc.ListResponse; }>())
export const listError = createAction('[Placement] List Error', props<{ error: any; }>())

export const getAllByProjectRequest = createAction('[Placement] Get All By Project Request', props<{ request: grpc.GetAllByProjectRequest;}>());
export const getAllByProjectSuccess = createAction('[Placement] Get All By Project Success', props<{ response: grpc.ListResponse;}>());
export const getAllByProjectError   = createAction('[Placement] Get All By Project Error', props<{ error: any;}>());

export const createRequest = createAction('[Placement] Create Request', props<{ request: grpc.CreateRequest;}>());
export const createSuccess = createAction('[Placement] Create Success', props<{ response: grpc.CreateResponse;}>());
export const createError   = createAction('[Placement] Create Error', props<{ error: any;}>());

export const getRequest = createAction('[Placement] Get Request', props<{ request: grpc.IdRequest;}>());
export const getSuccess = createAction('[Placement] Get Response', props<{ response: grpc.GetResponse;}>());
export const getError   = createAction('[Placement] Get Error', props<{ error: any;}>());

export const editRequest = createAction('[Placement] Edit Request', props<{ request: grpc.EditRequest;}>());
export const editSuccess = createAction('[Placement] Edit Response', props<{ response: grpc.EditResponse;}>());
export const editError   = createAction('[Placement] Edit Error', props<{ error: any;}>());

export const deleteRequest = createAction('[Placement] Delete Request', props<{ request: grpc.IdRequest;}>());
export const deleteSuccess = createAction('[Placement] Delete Response');
export const deleteError = createAction('[Placement] All Error', props<{ error: any;}>());
