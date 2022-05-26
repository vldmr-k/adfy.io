// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "template/service.proto" (package "adfy.io.rpc.template", syntax proto3),// tslint:disable
import { Inject } from "@angular/core";
import { RPC_TRANSPORT } from "@protobuf-ts/runtime-angular";
import { Injectable } from "@angular/core";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { TemplateService } from "./service";
import type { ListResponse } from "./service";
import type { Empty } from "../google/protobuf/empty";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetResponse } from "./service";
import type { IdRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service adfy.io.rpc.template.TemplateService
 */
export interface ITemplateServiceClient {
    /**
     * @generated from protobuf rpc: Get(adfy.io.rpc.template.IdRequest) returns (adfy.io.rpc.template.GetResponse);
     */
    get(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: List(google.protobuf.Empty) returns (adfy.io.rpc.template.ListResponse);
     */
    list(input: Empty, options?: RpcOptions): UnaryCall<Empty, ListResponse>;
}
/**
 * @generated from protobuf service adfy.io.rpc.template.TemplateService
 */
@Injectable()
export class TemplateServiceClient implements ITemplateServiceClient, ServiceInfo {
    typeName = TemplateService.typeName;
    methods = TemplateService.methods;
    options = TemplateService.options;
    constructor(
    @Inject(RPC_TRANSPORT)
    private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Get(adfy.io.rpc.template.IdRequest) returns (adfy.io.rpc.template.GetResponse);
     */
    get(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, GetResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<IdRequest, GetResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: List(google.protobuf.Empty) returns (adfy.io.rpc.template.ListResponse);
     */
    list(input: Empty, options?: RpcOptions): UnaryCall<Empty, ListResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, ListResponse>("unary", this._transport, method, opt, input);
    }
}
