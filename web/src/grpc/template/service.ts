// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "template/service.proto" (package "adfy.io.rpc.template", syntax proto3),// tslint:disable
import { Empty } from "../google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message adfy.io.rpc.template.ListResponse
 */
export interface ListResponse {
    /**
     * @generated from protobuf field: repeated adfy.io.rpc.template.Template templates = 1;
     */
    templates: Template[];
}
/**
 * @generated from protobuf message adfy.io.rpc.template.IdRequest
 */
export interface IdRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.template.GetResponse
 */
export interface GetResponse {
    /**
     * @generated from protobuf field: adfy.io.rpc.template.Template template = 1;
     */
    template?: Template;
}
/**
 * @generated from protobuf message adfy.io.rpc.template.Template
 */
export interface Template {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string component = 3;
     */
    component: string;
    /**
     * @generated from protobuf field: string formSchema = 4;
     */
    formSchema: string;
    /**
     * @generated from protobuf field: string sampleData = 5;
     */
    sampleData: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ListResponse$Type extends MessageType<ListResponse> {
    constructor() {
        super("adfy.io.rpc.template.ListResponse", [
            { no: 1, name: "templates", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Template }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.template.ListResponse
 */
export const ListResponse = new ListResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IdRequest$Type extends MessageType<IdRequest> {
    constructor() {
        super("adfy.io.rpc.template.IdRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.template.IdRequest
 */
export const IdRequest = new IdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetResponse$Type extends MessageType<GetResponse> {
    constructor() {
        super("adfy.io.rpc.template.GetResponse", [
            { no: 1, name: "template", kind: "message", T: () => Template }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.template.GetResponse
 */
export const GetResponse = new GetResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Template$Type extends MessageType<Template> {
    constructor() {
        super("adfy.io.rpc.template.Template", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "component", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "formSchema", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "sampleData", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.template.Template
 */
export const Template = new Template$Type();
/**
 * @generated ServiceType for protobuf service adfy.io.rpc.template.TemplateService
 */
export const TemplateService = new ServiceType("adfy.io.rpc.template.TemplateService", [
    { name: "Get", options: {}, I: IdRequest, O: GetResponse },
    { name: "List", options: {}, I: Empty, O: ListResponse }
]);