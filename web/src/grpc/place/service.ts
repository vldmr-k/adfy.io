// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "place/service.proto" (package "adfy.io.rpc.place", syntax proto3),// tslint:disable
import { Empty } from "../google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { Project } from "../project/service";
/**
 * @generated from protobuf message adfy.io.rpc.place.CreateRequest
 */
export interface CreateRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // required
    /**
     * @generated from protobuf field: string project = 2;
     */
    project: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.place.CreateResponse
 */
export interface CreateResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.place.Place place = 1;
     */
    place?: Place;
}
/**
 * @generated from protobuf message adfy.io.rpc.place.EditRequest
 */
export interface EditRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.place.EditResponse
 */
export interface EditResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.place.Place place = 1;
     */
    place?: Place;
}
/**
 * @generated from protobuf message adfy.io.rpc.place.IdRequest
 */
export interface IdRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.place.GetByProjectRequest
 */
export interface GetByProjectRequest {
    /**
     * @generated from protobuf field: string projectId = 1;
     */
    projectId: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.place.GetByProjectResponse
 */
export interface GetByProjectResponse {
    /**
     * @generated from protobuf field: repeated adfy.io.rpc.place.Place places = 1;
     */
    places: Place[];
}
/**
 * @generated from protobuf message adfy.io.rpc.place.GetPlaceResponse
 */
export interface GetPlaceResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.place.Place place = 1;
     */
    place?: Place;
}
/**
 * @generated from protobuf message adfy.io.rpc.place.Place
 */
export interface Place {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: adfy.io.rpc.project.Project project = 3;
     */
    project?: Project;
    /**
     * @generated from protobuf field: string securityKey = 4;
     */
    securityKey: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateRequest$Type extends MessageType<CreateRequest> {
    constructor() {
        super("adfy.io.rpc.place.CreateRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "50" } } } },
            { no: 2, name: "project", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.CreateRequest
 */
export const CreateRequest = new CreateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateResponse$Type extends MessageType<CreateResponse> {
    constructor() {
        super("adfy.io.rpc.place.CreateResponse", [
            { no: 1, name: "place", kind: "message", T: () => Place }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.CreateResponse
 */
export const CreateResponse = new CreateResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditRequest$Type extends MessageType<EditRequest> {
    constructor() {
        super("adfy.io.rpc.place.EditRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "50" } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.EditRequest
 */
export const EditRequest = new EditRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditResponse$Type extends MessageType<EditResponse> {
    constructor() {
        super("adfy.io.rpc.place.EditResponse", [
            { no: 1, name: "place", kind: "message", T: () => Place }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.EditResponse
 */
export const EditResponse = new EditResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IdRequest$Type extends MessageType<IdRequest> {
    constructor() {
        super("adfy.io.rpc.place.IdRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.IdRequest
 */
export const IdRequest = new IdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetByProjectRequest$Type extends MessageType<GetByProjectRequest> {
    constructor() {
        super("adfy.io.rpc.place.GetByProjectRequest", [
            { no: 1, name: "projectId", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.GetByProjectRequest
 */
export const GetByProjectRequest = new GetByProjectRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetByProjectResponse$Type extends MessageType<GetByProjectResponse> {
    constructor() {
        super("adfy.io.rpc.place.GetByProjectResponse", [
            { no: 1, name: "places", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Place }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.GetByProjectResponse
 */
export const GetByProjectResponse = new GetByProjectResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlaceResponse$Type extends MessageType<GetPlaceResponse> {
    constructor() {
        super("adfy.io.rpc.place.GetPlaceResponse", [
            { no: 1, name: "place", kind: "message", T: () => Place }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.GetPlaceResponse
 */
export const GetPlaceResponse = new GetPlaceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Place$Type extends MessageType<Place> {
    constructor() {
        super("adfy.io.rpc.place.Place", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "project", kind: "message", T: () => Project },
            { no: 4, name: "securityKey", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.place.Place
 */
export const Place = new Place$Type();
/**
 * @generated ServiceType for protobuf service adfy.io.rpc.place.PlaceService
 */
export const PlaceService = new ServiceType("adfy.io.rpc.place.PlaceService", [
    { name: "Create", options: {}, I: CreateRequest, O: CreateResponse },
    { name: "Get", options: {}, I: IdRequest, O: GetPlaceResponse },
    { name: "GetByProject", options: {}, I: GetByProjectRequest, O: GetByProjectResponse },
    { name: "Edit", options: {}, I: EditRequest, O: EditResponse },
    { name: "Delete", options: {}, I: IdRequest, O: Empty }
]);
