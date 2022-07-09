// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "placement/service.proto" (package "adfy.io.rpc.placement", syntax proto3),// tslint:disable
import { Empty } from "../google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { Template } from "../template/service";
import { Area } from "../area/service";
import { Project } from "../project/service";
import { Struct } from "../google/protobuf/struct";
/**
 * @generated from protobuf message adfy.io.rpc.placement.CreateRequest
 */
export interface CreateRequest {
    /**
     * @generated from protobuf field: adfy.io.rpc.placement.Placement placment = 1;
     */
    placment?: Placement;
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.CreateResponse
 */
export interface CreateResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.placement.Placement placement = 1;
     */
    placement?: Placement;
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.EditRequest
 */
export interface EditRequest {
    /**
     * @generated from protobuf field: adfy.io.rpc.placement.Placement placement = 1;
     */
    placement?: Placement;
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.EditResponse
 */
export interface EditResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.placement.Placement placement = 1;
     */
    placement?: Placement;
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.IdRequest
 */
export interface IdRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.GetAllByProjectRequest
 */
export interface GetAllByProjectRequest {
    /**
     * @generated from protobuf field: adfy.io.rpc.placement.IdRequest project = 1;
     */
    project?: IdRequest;
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.ListRequest
 */
export interface ListRequest {
    /**
     * @generated from protobuf field: repeated google.protobuf.Struct filters = 1;
     */
    filters: Struct[];
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.ListResponse
 */
export interface ListResponse {
    /**
     * @generated from protobuf field: repeated adfy.io.rpc.placement.Placement placements = 1;
     */
    placements: Placement[];
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.GetResponse
 */
export interface GetResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.placement.Placement placement = 1;
     */
    placement?: Placement;
}
/**
 * @generated from protobuf message adfy.io.rpc.placement.Placement
 */
export interface Placement {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: adfy.io.rpc.project.Project project = 4;
     */
    project?: Project;
    /**
     * @generated from protobuf field: adfy.io.rpc.area.Area area = 5;
     */
    area?: Area;
    /**
     * @generated from protobuf field: adfy.io.rpc.template.Template template = 6;
     */
    template?: Template;
    /**
     * @generated from protobuf field: string data = 7;
     */
    data: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateRequest$Type extends MessageType<CreateRequest> {
    constructor() {
        super("adfy.io.rpc.placement.CreateRequest", [
            { no: 1, name: "placment", kind: "message", T: () => Placement }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.CreateRequest
 */
export const CreateRequest = new CreateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateResponse$Type extends MessageType<CreateResponse> {
    constructor() {
        super("adfy.io.rpc.placement.CreateResponse", [
            { no: 1, name: "placement", kind: "message", T: () => Placement }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.CreateResponse
 */
export const CreateResponse = new CreateResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditRequest$Type extends MessageType<EditRequest> {
    constructor() {
        super("adfy.io.rpc.placement.EditRequest", [
            { no: 1, name: "placement", kind: "message", T: () => Placement }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.EditRequest
 */
export const EditRequest = new EditRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditResponse$Type extends MessageType<EditResponse> {
    constructor() {
        super("adfy.io.rpc.placement.EditResponse", [
            { no: 1, name: "placement", kind: "message", T: () => Placement }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.EditResponse
 */
export const EditResponse = new EditResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IdRequest$Type extends MessageType<IdRequest> {
    constructor() {
        super("adfy.io.rpc.placement.IdRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.IdRequest
 */
export const IdRequest = new IdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllByProjectRequest$Type extends MessageType<GetAllByProjectRequest> {
    constructor() {
        super("adfy.io.rpc.placement.GetAllByProjectRequest", [
            { no: 1, name: "project", kind: "message", T: () => IdRequest }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.GetAllByProjectRequest
 */
export const GetAllByProjectRequest = new GetAllByProjectRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListRequest$Type extends MessageType<ListRequest> {
    constructor() {
        super("adfy.io.rpc.placement.ListRequest", [
            { no: 1, name: "filters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Struct }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.ListRequest
 */
export const ListRequest = new ListRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListResponse$Type extends MessageType<ListResponse> {
    constructor() {
        super("adfy.io.rpc.placement.ListResponse", [
            { no: 1, name: "placements", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Placement }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.ListResponse
 */
export const ListResponse = new ListResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetResponse$Type extends MessageType<GetResponse> {
    constructor() {
        super("adfy.io.rpc.placement.GetResponse", [
            { no: 1, name: "placement", kind: "message", T: () => Placement }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.GetResponse
 */
export const GetResponse = new GetResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Placement$Type extends MessageType<Placement> {
    constructor() {
        super("adfy.io.rpc.placement.Placement", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "128" } } } },
            { no: 4, name: "project", kind: "message", T: () => Project },
            { no: 5, name: "area", kind: "message", T: () => Area },
            { no: 6, name: "template", kind: "message", T: () => Template },
            { no: 7, name: "data", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { len: "10" } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.placement.Placement
 */
export const Placement = new Placement$Type();
/**
 * @generated ServiceType for protobuf service adfy.io.rpc.placement.PlacementService
 */
export const PlacementService = new ServiceType("adfy.io.rpc.placement.PlacementService", [
    { name: "Create", options: {}, I: CreateRequest, O: CreateResponse },
    { name: "Get", options: {}, I: IdRequest, O: GetResponse },
    { name: "List", options: {}, I: ListRequest, O: ListResponse },
    { name: "GetAllByProject", options: {}, I: GetAllByProjectRequest, O: ListResponse },
    { name: "Edit", options: {}, I: EditRequest, O: EditResponse },
    { name: "Delete", options: {}, I: IdRequest, O: Empty }
]);
