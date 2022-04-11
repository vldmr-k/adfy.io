import { Inject, Injectable } from "@angular/core";
import { RpcInterceptor, UnaryCall, ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { getToken } from "../services/auth.service";

const token = getToken();

/**
 * Shows how to add a token in the "authorization" request header.
 */
export const addAuthHeaderInterceptor: RpcInterceptor = {
  interceptUnary(next, method, input, options): UnaryCall {
    if (!options.meta) {
      options.meta = {};
    }
    options.meta = { "Authorization": `Bearer ${token}` };
    console.log('unary interceptor added authorization header');
    return next(method, input, options);
  },
  interceptServerStreaming(next, method, input, options): ServerStreamingCall {
    if (!options.meta) {
      options.meta = {};
    }
    options.meta = { "Authorization": `Bearer ${token}` };
    console.log('server streaming interceptor added authorization header');
    return next(method, input, options);
  }
}
