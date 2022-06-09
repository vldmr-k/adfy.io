// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "media/service.proto" (package "adfy.io.rpc.media", syntax proto3),// tslint:disable
import { Inject } from "@angular/core";
import { RPC_TRANSPORT } from "@protobuf-ts/runtime-angular";
import { Injectable } from "@angular/core";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MediaService } from "./service";
import type { Empty } from "../google/protobuf/empty";
import type { GetResponse } from "./service";
import type { IdRequest } from "./service";
import type { UploadResponse } from "./service";
import type { UploadRequest } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { AllResponse } from "./service";
import type { AllRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service adfy.io.rpc.media.MediaService
 */
export interface IMediaServiceClient {
    /**
     * @generated from protobuf rpc: All(adfy.io.rpc.media.AllRequest) returns (adfy.io.rpc.media.AllResponse);
     */
    all(input: AllRequest, options?: RpcOptions): UnaryCall<AllRequest, AllResponse>;
    /**
     * @generated from protobuf rpc: Upload(adfy.io.rpc.media.UploadRequest) returns (adfy.io.rpc.media.UploadResponse);
     */
    upload(input: UploadRequest, options?: RpcOptions): UnaryCall<UploadRequest, UploadResponse>;
    /**
     * @generated from protobuf rpc: Get(adfy.io.rpc.media.IdRequest) returns (adfy.io.rpc.media.GetResponse);
     */
    get(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: Delete(adfy.io.rpc.media.IdRequest) returns (google.protobuf.Empty);
     */
    delete(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, Empty>;
}
/**
 * @generated from protobuf service adfy.io.rpc.media.MediaService
 */
@Injectable()
export class MediaServiceClient implements IMediaServiceClient, ServiceInfo {
    typeName = MediaService.typeName;
    methods = MediaService.methods;
    options = MediaService.options;
    constructor(
    @Inject(RPC_TRANSPORT)
    private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: All(adfy.io.rpc.media.AllRequest) returns (adfy.io.rpc.media.AllResponse);
     */
    all(input: AllRequest, options?: RpcOptions): UnaryCall<AllRequest, AllResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<AllRequest, AllResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Upload(adfy.io.rpc.media.UploadRequest) returns (adfy.io.rpc.media.UploadResponse);
     */
    upload(input: UploadRequest, options?: RpcOptions): UnaryCall<UploadRequest, UploadResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<UploadRequest, UploadResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Get(adfy.io.rpc.media.IdRequest) returns (adfy.io.rpc.media.GetResponse);
     */
    get(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, GetResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<IdRequest, GetResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(adfy.io.rpc.media.IdRequest) returns (google.protobuf.Empty);
     */
    delete(input: IdRequest, options?: RpcOptions): UnaryCall<IdRequest, Empty> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<IdRequest, Empty>("unary", this._transport, method, opt, input);
    }
}
