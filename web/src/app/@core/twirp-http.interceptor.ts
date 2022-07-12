import {inject} from "@angular/core";
import { RpcInterceptor, UnaryCall, ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { UserTokenStorage } from "@core/services/user-token.service";


function getStorage(): UserTokenStorage {
  return inject(UserTokenStorage);
}

export class TwirpHttpInterceptor {

  static addBearerToken(): RpcInterceptor {
    return {
      interceptUnary(next, method, input, options): UnaryCall {

        if (!options.meta) {
          options.meta = {};
        }

        const token = getStorage().getToken();

        options.meta = { "Authorization": `Bearer ${token}` };

        return next(method, input, options);
      },
      interceptServerStreaming(next, method, input, options): ServerStreamingCall {

        if (!options.meta) {
          options.meta = {};
        }

        const token = getStorage().getToken();

        options.meta = { "Authorization": `Bearer ${token}` };
        return next(method, input, options);
      }
    }
  }
}


/**
 * Shows how to add a token in the "authorization" request header.

export const addAuthHeaderInterceptor: RpcInterceptor = {
  interceptUnary(next, method, input, options): UnaryCall {

    if (!options.meta) {
      options.meta = {};
    }
    options.meta = { "Authorization": `Bearer ${token}` };
    console.log("token: ", token)
    return next(method, input, options);
  },
  interceptServerStreaming(next, method, input, options): ServerStreamingCall {

    if (!options.meta) {
      options.meta = {};
    }
    options.meta = { "Authorization": `Bearer ${token}` };
    return next(method, input, options);
  }
}
 */
