// @generated by protobuf-ts 2.4.0 with parameter force_server_none,optimize_code_size,enable_angular_annotations,generate_dependencies,// @generated from protobuf file "google/protobuf/struct.proto" (package "google.protobuf", syntax proto3),// tslint:disable
//
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
import { isJsonObject } from "@protobuf-ts/runtime";
import { typeofJsonValue } from "@protobuf-ts/runtime";
import type { JsonValue } from "@protobuf-ts/runtime";
import type { JsonReadOptions } from "@protobuf-ts/runtime";
import type { JsonWriteOptions } from "@protobuf-ts/runtime";
import type { JsonObject } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 *
 * @generated from protobuf message google.protobuf.Struct
 */
export interface Struct {
    /**
     * Unordered map of dynamically typed values.
     *
     * @generated from protobuf field: map<string, google.protobuf.Value> fields = 1;
     */
    fields: {
        [key: string]: Value;
    };
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 *
 * @generated from protobuf message google.protobuf.Value
 */
export interface Value {
    /**
     * @generated from protobuf oneof: kind
     */
    kind: {
        oneofKind: "nullValue";
        /**
         * Represents a null value.
         *
         * @generated from protobuf field: google.protobuf.NullValue null_value = 1;
         */
        nullValue: NullValue;
    } | {
        oneofKind: "numberValue";
        /**
         * Represents a double value.
         *
         * @generated from protobuf field: double number_value = 2;
         */
        numberValue: number;
    } | {
        oneofKind: "stringValue";
        /**
         * Represents a string value.
         *
         * @generated from protobuf field: string string_value = 3;
         */
        stringValue: string;
    } | {
        oneofKind: "boolValue";
        /**
         * Represents a boolean value.
         *
         * @generated from protobuf field: bool bool_value = 4;
         */
        boolValue: boolean;
    } | {
        oneofKind: "structValue";
        /**
         * Represents a structured value.
         *
         * @generated from protobuf field: google.protobuf.Struct struct_value = 5;
         */
        structValue: Struct;
    } | {
        oneofKind: "listValue";
        /**
         * Represents a repeated `Value`.
         *
         * @generated from protobuf field: google.protobuf.ListValue list_value = 6;
         */
        listValue: ListValue;
    } | {
        oneofKind: undefined;
    };
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 *
 * @generated from protobuf message google.protobuf.ListValue
 */
export interface ListValue {
    /**
     * Repeated field of dynamically typed values.
     *
     * @generated from protobuf field: repeated google.protobuf.Value values = 1;
     */
    values: Value[];
}
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 *
 * @generated from protobuf enum google.protobuf.NullValue
 */
export enum NullValue {
    /**
     * Null value.
     *
     * @generated from protobuf enum value: NULL_VALUE = 0;
     */
    NULL_VALUE = 0
}
// @generated message type with reflection information, may provide speed optimized methods
class Struct$Type extends MessageType<Struct> {
    constructor() {
        super("google.protobuf.Struct", [
            { no: 1, name: "fields", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Value } }
        ]);
    }
    /**
     * Encode `Struct` to JSON object.
     */
    internalJsonWrite(message: Struct, options: JsonWriteOptions): JsonValue {
        let json: JsonObject = {};
        for (let [k, v] of Object.entries(message.fields)) {
            json[k] = Value.toJson(v);
        }
        return json;
    }
    /**
     * Decode `Struct` from JSON object.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Struct): Struct {
        if (!isJsonObject(json))
            throw new globalThis.Error("Unable to parse message " + this.typeName + " from JSON " + typeofJsonValue(json) + ".");
        if (!target)
            target = this.create();
        for (let [k, v] of globalThis.Object.entries(json)) {
            target.fields[k] = Value.fromJson(v);
        }
        return target;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.Struct
 */
export const Struct = new Struct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Value$Type extends MessageType<Value> {
    constructor() {
        super("google.protobuf.Value", [
            { no: 1, name: "null_value", kind: "enum", oneof: "kind", T: () => ["google.protobuf.NullValue", NullValue] },
            { no: 2, name: "number_value", kind: "scalar", oneof: "kind", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "string_value", kind: "scalar", oneof: "kind", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "bool_value", kind: "scalar", oneof: "kind", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "struct_value", kind: "message", oneof: "kind", T: () => Struct },
            { no: 6, name: "list_value", kind: "message", oneof: "kind", T: () => ListValue }
        ]);
    }
    /**
     * Encode `Value` to JSON value.
     */
    internalJsonWrite(message: Value, options: JsonWriteOptions): JsonValue {
        if (message.kind.oneofKind === undefined)
            throw new globalThis.Error();
        switch (message.kind.oneofKind) {
            case undefined: throw new globalThis.Error();
            case "boolValue": return message.kind.boolValue;
            case "nullValue": return null;
            case "numberValue": return message.kind.numberValue;
            case "stringValue": return message.kind.stringValue;
            case "listValue":
                let listValueField = this.fields.find(f => f.no === 6);
                if (listValueField?.kind !== "message")
                    throw new globalThis.Error();
                return listValueField.T().toJson(message.kind.listValue);
            case "structValue":
                let structValueField = this.fields.find(f => f.no === 5);
                if (structValueField?.kind !== "message")
                    throw new globalThis.Error();
                return structValueField.T().toJson(message.kind.structValue);
        }
    }
    /**
     * Decode `Value` from JSON value.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Value): Value {
        if (!target)
            target = this.create();
        switch (typeof json) {
            case "number":
                target.kind = { oneofKind: "numberValue", numberValue: json };
                break;
            case "string":
                target.kind = { oneofKind: "stringValue", stringValue: json };
                break;
            case "boolean":
                target.kind = { oneofKind: "boolValue", boolValue: json };
                break;
            case "object":
                if (json === null) {
                    target.kind = { oneofKind: "nullValue", nullValue: NullValue.NULL_VALUE };
                }
                else if (globalThis.Array.isArray(json)) {
                    target.kind = { oneofKind: "listValue", listValue: ListValue.fromJson(json) };
                }
                else {
                    let val = Struct.fromJson(json);
                    target.kind = { oneofKind: "structValue", structValue: Struct.fromJson(json) };
                }
                break;
            default: throw new globalThis.Error("Unable to parse " + this.typeName + " from JSON " + typeofJsonValue(json));
        }
        return target;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.Value
 */
export const Value = new Value$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListValue$Type extends MessageType<ListValue> {
    constructor() {
        super("google.protobuf.ListValue", [
            { no: 1, name: "values", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Value }
        ]);
    }
    /**
     * Encode `ListValue` to JSON array.
     */
    internalJsonWrite(message: ListValue, options: JsonWriteOptions): JsonValue {
        return message.values.map(v => Value.toJson(v));
    }
    /**
     * Decode `ListValue` from JSON array.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: ListValue): ListValue {
        if (!globalThis.Array.isArray(json))
            throw new globalThis.Error("Unable to parse " + this.typeName + " from JSON " + typeofJsonValue(json));
        if (!target)
            target = this.create();
        let values = json.map(v => Value.fromJson(v));
        target.values.push(...values);
        return target;
    }
}
/**
 * @generated MessageType for protobuf message google.protobuf.ListValue
 */
export const ListValue = new ListValue$Type();
