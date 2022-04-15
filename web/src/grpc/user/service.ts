// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,// @generated from protobuf file "user/service.proto" (package "adfy.io.rpc.user", syntax proto3),// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message adfy.io.rpc.user.Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message adfy.io.rpc.user.SignUpRequest
 */
export interface SignUpRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // required
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string; // required
    /**
     * @generated from protobuf field: string password = 3;
     */
    password: string; // required
}
/**
 * @generated from protobuf message adfy.io.rpc.user.SignUpResponse
 */
export interface SignUpResponse {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string; // required
}
/**
 * @generated from protobuf message adfy.io.rpc.user.SignInRequest
 */
export interface SignInRequest {
    /**
     * @generated from protobuf field: string email = 1;
     */
    email: string;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
}
/**
 * @generated from protobuf message adfy.io.rpc.user.SignInResponse
 */
export interface SignInResponse {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string; // required
    /**
     * @generated from protobuf field: int64 expiresIn = 2;
     */
    expiresIn: bigint; // required
}
/**
 * @generated from protobuf message adfy.io.rpc.user.MeResponse
 */
export interface MeResponse {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("adfy.io.rpc.user.Empty", []);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.user.Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignUpRequest$Type extends MessageType<SignUpRequest> {
    constructor() {
        super("adfy.io.rpc.user.SignUpRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "3", maxLen: "50" } } } },
            { no: 2, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { email: true } } } },
            { no: 3, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "6" } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.user.SignUpRequest
 */
export const SignUpRequest = new SignUpRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignUpResponse$Type extends MessageType<SignUpResponse> {
    constructor() {
        super("adfy.io.rpc.user.SignUpResponse", [
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.user.SignUpResponse
 */
export const SignUpResponse = new SignUpResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInRequest$Type extends MessageType<SignInRequest> {
    constructor() {
        super("adfy.io.rpc.user.SignInRequest", [
            { no: 1, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { email: true } } } },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "6" } } } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.user.SignInRequest
 */
export const SignInRequest = new SignInRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInResponse$Type extends MessageType<SignInResponse> {
    constructor() {
        super("adfy.io.rpc.user.SignInResponse", [
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "expiresIn", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.user.SignInResponse
 */
export const SignInResponse = new SignInResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MeResponse$Type extends MessageType<MeResponse> {
    constructor() {
        super("adfy.io.rpc.user.MeResponse", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message adfy.io.rpc.user.MeResponse
 */
export const MeResponse = new MeResponse$Type();
/**
 * @generated ServiceType for protobuf service adfy.io.rpc.user.UserService
 */
export const UserService = new ServiceType("adfy.io.rpc.user.UserService", [
    { name: "SignIn", options: {}, I: SignInRequest, O: SignInResponse },
    { name: "SignUp", options: {}, I: SignUpRequest, O: SignUpResponse },
    { name: "Me", options: {}, I: Empty, O: MeResponse }
]);
