// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "user/service.proto" (package "adfy.io.rpc.user", syntax proto3),// tslint:disable
import { Inject } from "@angular/core";
import { RPC_TRANSPORT } from "@protobuf-ts/runtime-angular";
import { Injectable } from "@angular/core";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { UserService } from "./service";
import type { MeResponse } from "./service";
import type { Empty } from "../google/protobuf/empty";
import type { SignUpResponse } from "./service";
import type { SignUpRequest } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { SignInResponse } from "./service";
import type { SignInRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service adfy.io.rpc.user.UserService
 */
export interface IUserServiceClient {
    /**
     * @generated from protobuf rpc: SignIn(adfy.io.rpc.user.SignInRequest) returns (adfy.io.rpc.user.SignInResponse);
     */
    signIn(input: SignInRequest, options?: RpcOptions): UnaryCall<SignInRequest, SignInResponse>;
    /**
     * @generated from protobuf rpc: SignUp(adfy.io.rpc.user.SignUpRequest) returns (adfy.io.rpc.user.SignUpResponse);
     */
    signUp(input: SignUpRequest, options?: RpcOptions): UnaryCall<SignUpRequest, SignUpResponse>;
    /**
     * @generated from protobuf rpc: Me(google.protobuf.Empty) returns (adfy.io.rpc.user.MeResponse);
     */
    me(input: Empty, options?: RpcOptions): UnaryCall<Empty, MeResponse>;
}
/**
 * @generated from protobuf service adfy.io.rpc.user.UserService
 */
@Injectable()
export class UserServiceClient implements IUserServiceClient, ServiceInfo {
    typeName = UserService.typeName;
    methods = UserService.methods;
    options = UserService.options;
    constructor(
    @Inject(RPC_TRANSPORT)
    private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: SignIn(adfy.io.rpc.user.SignInRequest) returns (adfy.io.rpc.user.SignInResponse);
     */
    signIn(input: SignInRequest, options?: RpcOptions): UnaryCall<SignInRequest, SignInResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SignInRequest, SignInResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SignUp(adfy.io.rpc.user.SignUpRequest) returns (adfy.io.rpc.user.SignUpResponse);
     */
    signUp(input: SignUpRequest, options?: RpcOptions): UnaryCall<SignUpRequest, SignUpResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SignUpRequest, SignUpResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Me(google.protobuf.Empty) returns (adfy.io.rpc.user.MeResponse);
     */
    me(input: Empty, options?: RpcOptions): UnaryCall<Empty, MeResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, MeResponse>("unary", this._transport, method, opt, input);
    }
}
