import { props, createAction } from '@ngrx/store';

import * as grpc from '@grpc/media/service';

export const uploadRequest = createAction('[Media] Upload Request', props<{ request: grpc.UploadRequest;}>());
export const uploadSuccess = createAction('[Media] Upload Success', props<{ response: grpc.UploadResponse;}>());
export const uploadError   = createAction('[Media] Upload Error', props<{ error: any;}>());

export const getRequest = createAction('[Media] Get Request', props<{ request: grpc.IdRequest;}>());
export const getSuccess = createAction('[Media] Get Response', props<{ response: grpc.GetResponse;}>());
export const getError   = createAction('[Media] Get Error', props<{ error: any;}>());

export const deleteRequest = createAction('[Media] Delete Request', props<{ request: grpc.IdRequest;}>());
export const deleteSuccess = createAction('[Media] Delete Response');
export const deleteError = createAction('[Project] All Error', props<{ error: any;}>());

