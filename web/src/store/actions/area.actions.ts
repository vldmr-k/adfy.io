import { props, createAction } from '@ngrx/store';

import * as grpc from '@grpc/area/service';

import { Area }  from "@store/models"

export const getByProjectRequest = createAction('[Area] Get By Project Request', props<{ request: grpc.GetByProjectRequest;}>());
export const getByProjectSuccess = createAction('[Area] Get By Project Success', props<{ response: grpc.GetByProjectResponse;}>());
export const getByProjectError   = createAction('[Area] Get By Project Error', props<{ error: any;}>());

export const createRequest = createAction('[Area] Create Request', props<{ request: grpc.CreateRequest;}>());
export const createSuccess = createAction('[Area] Create Success', props<{ response: grpc.CreateResponse;}>());
export const createError   = createAction('[Area] Create Error', props<{ error: any;}>());

export const getRequest = createAction('[Area] Get Request', props<{ request: grpc.IdRequest;}>());
export const getSuccess = createAction('[Area] Get Response', props<{ response: grpc.GetResponse;}>());
export const getError   = createAction('[Area] Get Error', props<{ error: any;}>());

export const editRequest = createAction('[Area] Get Request', props<{ request: grpc.EditRequest;}>());
export const editSuccess = createAction('[Area] Get Response', props<{ response: grpc.EditResponse;}>());
export const editError   = createAction('[Area] Get Error', props<{ error: any;}>());

export const deleteRequest = createAction('[Area] Delete Request', props<{ request: grpc.IdRequest;}>());
export const deleteSuccess = createAction('[Area] Delete Response');
export const deleteError = createAction('[Area] All Error', props<{ error: any;}>());
