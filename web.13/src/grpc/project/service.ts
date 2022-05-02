// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "project/service.proto" (package "adfy.io.rpc.project", syntax proto3),// tslint:disable
import { Empty } from "../google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message adfy.io.rpc.project.CreateRequest
 */
export interface CreateRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // required
    /**
     * @generated from protobuf field: repeated string domain = 2;
     */
    domain: string[]; // required
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.project.CreateResponse
 */
export interface CreateResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.project.Project project = 1;
     */
    project?: Project;
}
/**
 * @generated from protobuf message adfy.io.rpc.project.EditRequest
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
    /**
     * @generated from protobuf field: repeated string domain = 3;
     */
    domain: string[]; // required
    /**
     * @generated from protobuf field: string description = 4;
     */
    description: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.project.EditResponse
 */
export interface EditResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.project.Project project = 1;
     */
    project?: Project;
}
/**
 * @generated from protobuf message adfy.io.rpc.project.GetProjectResponse
 */
export interface GetProjectResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.project.Project project = 1;
     */
    project?: Project;
}
/**
 * @generated from protobuf message adfy.io.rpc.project.IdRequest
 */
export interface IdRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.project.AllProjectResponse
 */
export interface AllProjectResponse {
    /**
     * @generated from protobuf field: repeated adfy.io.rpc.project.Project projects = 1;
     */
    projects: Project[];
}
/**
 * @generated from protobuf message adfy.io.rpc.project.Project
 */
export interface Project {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: repeated string domain = 3;
     */
    domain: string[];
    /**
     * @generated from protobuf field: string description = 4;
     */
    description: string;
    /**
     * @generated from protobuf field: string htmlCode = 5;
     */
    htmlCode: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateRequest$Type extends MessageType<CreateRequest> {
    constructor() {
        super("adfy.io.rpc.project.CreateRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "50" } } } },
            { no: 2, name: "domain", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { repeated: { unique: true } } } },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.CreateRequest
 */
export const CreateRequest = new CreateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateResponse$Type extends MessageType<CreateResponse> {
    constructor() {
        super("adfy.io.rpc.project.CreateResponse", [
            { no: 1, name: "project", kind: "message", T: () => Project }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.CreateResponse
 */
export const CreateResponse = new CreateResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditRequest$Type extends MessageType<EditRequest> {
    constructor() {
        super("adfy.io.rpc.project.EditRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { uuid: true } } } },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "50" } } } },
            { no: 3, name: "domain", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { repeated: { unique: true } } } },
            { no: 4, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.EditRequest
 */
export const EditRequest = new EditRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EditResponse$Type extends MessageType<EditResponse> {
    constructor() {
        super("adfy.io.rpc.project.EditResponse", [
            { no: 1, name: "project", kind: "message", T: () => Project }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.EditResponse
 */
export const EditResponse = new EditResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetProjectResponse$Type extends MessageType<GetProjectResponse> {
    constructor() {
        super("adfy.io.rpc.project.GetProjectResponse", [
            { no: 1, name: "project", kind: "message", T: () => Project }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.GetProjectResponse
 */
export const GetProjectResponse = new GetProjectResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IdRequest$Type extends MessageType<IdRequest> {
    constructor() {
        super("adfy.io.rpc.project.IdRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.IdRequest
 */
export const IdRequest = new IdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllProjectResponse$Type extends MessageType<AllProjectResponse> {
    constructor() {
        super("adfy.io.rpc.project.AllProjectResponse", [
            { no: 1, name: "projects", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Project }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.AllProjectResponse
 */
export const AllProjectResponse = new AllProjectResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Project$Type extends MessageType<Project> {
    constructor() {
        super("adfy.io.rpc.project.Project", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "domain", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "htmlCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.project.Project
 */
export const Project = new Project$Type();
/**
 * @generated ServiceType for protobuf service adfy.io.rpc.project.ProjectService
 */
export const ProjectService = new ServiceType("adfy.io.rpc.project.ProjectService", [
    { name: "CreateProject", options: {}, I: CreateRequest, O: CreateResponse },
    { name: "GetProject", options: {}, I: IdRequest, O: GetProjectResponse },
    { name: "AllProject", options: {}, I: Empty, O: AllProjectResponse },
    { name: "EditProject", options: {}, I: EditRequest, O: EditResponse },
    { name: "DeleteProject", options: {}, I: IdRequest, O: Empty }
]);