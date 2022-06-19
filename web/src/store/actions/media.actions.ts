import { props, createAction } from '@ngrx/store';

import * as grpc from '@grpc/media/service';

import { Media }  from "@store/models"

export const allRequest = createAction('[Media] All Request', props<{ request: grpc.AllRequest;}>());
export const allSuccess = createAction('[Media] All Success', props<{ response: grpc.AllResponse;}>());
export const allError   = createAction('[Media] All Error', props<{ error: any;}>());

export const uploadRequest = createAction('[Media] Upload Request', props<{ request: grpc.UploadRequest;}>());
export const uploadSuccess = createAction('[Media] Upload Success', props<{ response: grpc.UploadResponse;}>());
export const uploadError   = createAction('[Media] Upload Error', props<{ error: any;}>());

export const getRequest = createAction('[Media] Get Request', props<{ request: grpc.IdRequest;}>());
export const getSuccess = createAction('[Media] Get Response', props<{ response: grpc.GetResponse;}>());
export const getError   = createAction('[Media] Get Error', props<{ error: any;}>());

export const deleteRequest = createAction('[Media] Delete Request', props<{ request: grpc.IdRequest;}>());
export const deleteSuccess = createAction('[Media] Delete Response');
export const deleteError = createAction('[Media] All Error', props<{ error: any;}>());

export const selectedMedia = createAction('[Media] Selected Media', props<{ media: Media;}>());
export const resetSelectedMedia = createAction('[Media] Reset Selected Media');


