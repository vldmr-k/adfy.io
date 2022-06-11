// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "area/service.proto" (package "adfy.io.rpc.area", syntax proto3),// tslint:disable
import { Empty } from "../google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message adfy.io.rpc.area.CreateRequest
 */
export interface CreateRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // required
    /**
     * @generated from protobuf field: string projectId = 2;
     */
    projectId: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.area.CreateResponse
 */
export interface CreateResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.area.Area area = 1;
     */
    area?: Area;
}
/**
 * @generated from protobuf message adfy.io.rpc.area.EditRequest
 */
export interface EditRequest {
    /**
     * @generated from protobuf field: adfy.io.rpc.area.IdRequest id = 1;
     */
    id?: IdRequest;
    /**
     * @generated from protobuf field: adfy.io.rpc.area.Area area = 2;
     */
    area?: Area;
}
/**
 * @generated from protobuf message adfy.io.rpc.area.EditResponse
 */
export interface EditResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.area.Area area = 1;
     */
    area?: Area;
}
/**
 * @generated from protobuf message adfy.io.rpc.area.IdRequest
 */
export interface IdRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.area.GetByProjectRequest
 */
export interface GetByProjectRequest {
    /**
     * @generated from protobuf field: adfy.io.rpc.area.IdRequest project = 1;
     */
    project?: IdRequest;
}
/**
 * @generated from protobuf message adfy.io.rpc.area.GetByProjectResponse
 */
export interface GetByProjectResponse {
    /**
     * @generated from protobuf field: repeated adfy.io.rpc.area.Area areas = 1;
     */
    areas: Area[];
}
/**
 * @generated from protobuf message adfy.io.rpc.area.GetResponse
 */
export interface GetResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.area.Area area = 1;
     */
    area?: Area;
}
/**
 * @generated from protobuf message adfy.io.rpc.area.Area
 */
export interface Area {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string projectID = 4;
     */
    projectID: string;
    /**
     * @generated from protobuf field: string embedCode = 5;
     */
    embedCode: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateRequest$Type extends MessageType<CreateRequest> {
    constructor() {
        super("adfy.io.rpc.area.CreateRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "50" } } } },
            { no: 2, name: "projectId", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.CreateRequest
 */
export const CreateRequest = new CreateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateResponse$Type extends MessageType<CreateResponse> {
    constructor() {
        super("adfy.io.rpc.area.CreateResponse", [
            { no: 1, name: "area", kind: "message", T: () => Area }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.CreateResponse
 */
export const CreateResponse = new CreateResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditRequest$Type extends MessageType<EditRequest> {
    constructor() {
        super("adfy.io.rpc.area.EditRequest", [
            { no: 1, name: "id", kind: "message", T: () => IdRequest },
            { no: 2, name: "area", kind: "message", T: () => Area }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.EditRequest
 */
export const EditRequest = new EditRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditResponse$Type extends MessageType<EditResponse> {
    constructor() {
        super("adfy.io.rpc.area.EditResponse", [
            { no: 1, name: "area", kind: "message", T: () => Area }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.EditResponse
 */
export const EditResponse = new EditResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IdRequest$Type extends MessageType<IdRequest> {
    constructor() {
        super("adfy.io.rpc.area.IdRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.IdRequest
 */
export const IdRequest = new IdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetByProjectRequest$Type extends MessageType<GetByProjectRequest> {
    constructor() {
        super("adfy.io.rpc.area.GetByProjectRequest", [
            { no: 1, name: "project", kind: "message", T: () => IdRequest }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.GetByProjectRequest
 */
export const GetByProjectRequest = new GetByProjectRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetByProjectResponse$Type extends MessageType<GetByProjectResponse> {
    constructor() {
        super("adfy.io.rpc.area.GetByProjectResponse", [
            { no: 1, name: "areas", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Area }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.GetByProjectResponse
 */
export const GetByProjectResponse = new GetByProjectResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetResponse$Type extends MessageType<GetResponse> {
    constructor() {
        super("adfy.io.rpc.area.GetResponse", [
            { no: 1, name: "area", kind: "message", T: () => Area }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.GetResponse
 */
export const GetResponse = new GetResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Area$Type extends MessageType<Area> {
    constructor() {
        super("adfy.io.rpc.area.Area", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "128" } } } },
            { no: 4, name: "projectID", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } },
            { no: 5, name: "embedCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.area.Area
 */
export const Area = new Area$Type();
/**
 * @generated ServiceType for protobuf service adfy.io.rpc.area.AreaService
 */
export const AreaService = new ServiceType("adfy.io.rpc.area.AreaService", [
    { name: "Create", options: {}, I: CreateRequest, O: CreateResponse },
    { name: "Get", options: {}, I: IdRequest, O: GetResponse },
    { name: "GetByProject", options: {}, I: GetByProjectRequest, O: GetByProjectResponse },
    { name: "Edit", options: {}, I: EditRequest, O: EditResponse },
    { name: "Delete", options: {}, I: IdRequest, O: Empty }
]);
