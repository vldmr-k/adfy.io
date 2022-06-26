// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "placement/service.proto" (package "adfy.io.rpc.placement", syntax proto3),// tslint:disable
import { Inject } from "@angular/core";
import { RPC_TRANSPORT } from "@protobuf-ts/runtime-angular";
import { Injectable } from "@angular/core";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PlacementService } from "./service";
import type { Empty } from "../google/protobuf/empty";
import type { EditResponse } from "./service";
import type { EditRequest } from "./service";
import type { GetAllByProjectResponse } from "./service";
import type { GetAllByProjectRequest } from "./service";
import type { GetResponse } from "./service";
import type { IdRequest } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CreateResponse } from "./service";
import type { CreateRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service adfy.io.rpc.placement.PlacementService
 */
export interface IPlacementServiceClient {
    /**
     * @generated from protobuf rpc: Create(adfy.io.rpc.placement.CreateRequest) returns (adfy.io.rpc.placement.CreateResponse);
     */
    create(input: CreateRequest, options?: RpcOptions): UnaryCall<CreateRequest, CreateResponse>;
    /**
     * @generated from protobuf rpc: Get(adfy.io.rpc.placement.IdRequest) returns (adfy.io.rpc.placement.GetResponse);
     */
    get(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: GetAllByProject(adfy.io.rpc.placement.GetAllByProjectRequest) returns (adfy.io.rpc.placement.GetAllByProjectResponse);
     */
    getAllByProject(input: GetAllByProjectRequest, options?: RpcOptions): UnaryCall<GetAllByProjectRequest, GetAllByProjectResponse>;
    /**
     * @generated from protobuf rpc: Edit(adfy.io.rpc.placement.EditRequest) returns (adfy.io.rpc.placement.EditResponse);
     */
    edit(input: EditRequest, options?: RpcOptions): UnaryCall<EditRequest, EditResponse>;
    /**
     * @generated from protobuf rpc: Delete(adfy.io.rpc.placement.IdRequest) returns (google.protobuf.Empty);
     */
    delete(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, Empty>;
}
/**
 * @generated from protobuf service adfy.io.rpc.placement.PlacementService
 */
@Injectable()
export class PlacementServiceClient implements IPlacementServiceClient, ServiceInfo {
    typeName = PlacementService.typeName;
    methods = PlacementService.methods;
    options = PlacementService.options;
    constructor(
    @Inject(RPC_TRANSPORT)
    private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Create(adfy.io.rpc.placement.CreateRequest) returns (adfy.io.rpc.placement.CreateResponse);
     */
    create(input: CreateRequest, options?: RpcOptions): UnaryCall<CreateRequest, CreateResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateRequest, CreateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Get(adfy.io.rpc.placement.IdRequest) returns (adfy.io.rpc.placement.GetResponse);
     */
    get(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, GetResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<IdRequest, GetResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAllByProject(adfy.io.rpc.placement.GetAllByProjectRequest) returns (adfy.io.rpc.placement.GetAllByProjectResponse);
     */
    getAllByProject(input: GetAllByProjectRequest, options?: RpcOptions): UnaryCall<GetAllByProjectRequest, GetAllByProjectResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAllByProjectRequest, GetAllByProjectResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Edit(adfy.io.rpc.placement.EditRequest) returns (adfy.io.rpc.placement.EditResponse);
     */
    edit(input: EditRequest, options?: RpcOptions): UnaryCall<EditRequest, EditResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<EditRequest, EditResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(adfy.io.rpc.placement.IdRequest) returns (google.protobuf.Empty);
     */
    delete(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, Empty> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<IdRequest, Empty>("unary", this._transport, method, opt, input);
    }
}