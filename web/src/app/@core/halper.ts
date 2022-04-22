import { RpcError } from '@protobuf-ts/runtime-rpc';
import { INVALID_REQUEST } from './constant';


/**
 * Check is RpcError response
 *
 * @param e
 * @returns
 */
export function isRpcError(e: Error): boolean {
  return (e instanceof RpcError)
}

/**
 * Check is response has validate form
 *
 * @param e
 * @returns
 */
export function isValidateFormError(e: Error): boolean {
  return isRpcError(e) && e.message == INVALID_REQUEST
}

export function getValidateFormErrors(e: RpcError): Map<string, string> {
  var map = new Map<string, string>();

  if (isValidateFormError(e)) {
    for (const [key, value] of Object.entries(e.meta)) {
      if (typeof value == 'string') {
        map.set(key.toLocaleLowerCase(), value);
      }
    }

  }

  return map;
}
