// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "media/service.proto" (package "adfy.io.rpc.media", syntax proto3),// tslint:disable
import { Empty } from "../google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message adfy.io.rpc.media.UploadRequest
 */
export interface UploadRequest {
    /**
     * @generated from protobuf field: bytes body = 1;
     */
    body: Uint8Array;
}
/**
 * @generated from protobuf message adfy.io.rpc.media.UploadResponse
 */
export interface UploadResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.media.Media media = 1;
     */
    media?: Media;
}
/**
 * @generated from protobuf message adfy.io.rpc.media.GetResponse
 */
export interface GetResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.media.Media media = 1;
     */
    media?: Media;
}
/**
 * @generated from protobuf message adfy.io.rpc.media.IdRequest
 */
export interface IdRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.media.Media
 */
export interface Media {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string path = 2;
     */
    path: string;
    /**
     * @generated from protobuf field: string url = 3;
     */
    url: string;
    /**
     * @generated from protobuf field: string mime = 4;
     */
    mime: string;
    /**
     * @generated from protobuf field: int32 size = 5;
     */
    size: number;
    /**
     * @generated from protobuf field: int32 width = 6;
     */
    width: number;
    /**
     * @generated from protobuf field: int32 height = 7;
     */
    height: number;
    /**
     * @generated from protobuf field: adfy.io.rpc.media.Media.MediaType type = 8;
     */
    type: Media_MediaType;
}
/**
 * @generated from protobuf enum adfy.io.rpc.media.Media.MediaType
 */
export enum Media_MediaType {
    /**
     * @generated from protobuf enum value: IMAGE = 0;
     */
    IMAGE = 0,
    /**
     * @generated from protobuf enum value: VIDEO = 1;
     */
    VIDEO = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class UploadRequest$Type extends MessageType<UploadRequest> {
    constructor() {
        super("adfy.io.rpc.media.UploadRequest", [
            { no: 1, name: "body", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.media.UploadRequest
 */
export const UploadRequest = new UploadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadResponse$Type extends MessageType<UploadResponse> {
    constructor() {
        super("adfy.io.rpc.media.UploadResponse", [
            { no: 1, name: "media", kind: "message", T: () => Media }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.media.UploadResponse
 */
export const UploadResponse = new UploadResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetResponse$Type extends MessageType<GetResponse> {
    constructor() {
        super("adfy.io.rpc.media.GetResponse", [
            { no: 1, name: "media", kind: "message", T: () => Media }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.media.GetResponse
 */
export const GetResponse = new GetResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IdRequest$Type extends MessageType<IdRequest> {
    constructor() {
        super("adfy.io.rpc.media.IdRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.media.IdRequest
 */
export const IdRequest = new IdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Media$Type extends MessageType<Media> {
    constructor() {
        super("adfy.io.rpc.media.Media", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "mime", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "size", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "width", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "height", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "type", kind: "enum", T: () => ["adfy.io.rpc.media.Media.MediaType", Media_MediaType] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.media.Media
 */
export const Media = new Media$Type();
/**
 * @generated ServiceType for protobuf service adfy.io.rpc.media.MediaService
 */
export const MediaService = new ServiceType("adfy.io.rpc.media.MediaService", [
    { name: "Upload", options: {}, I: UploadRequest, O: UploadResponse },
    { name: "Get", options: {}, I: IdRequest, O: GetResponse },
    { name: "Delete", options: {}, I: IdRequest, O: Empty }
]);
