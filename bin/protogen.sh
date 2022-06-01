#/bin/bash

. $(dirname "$0")/init.sh


PROTO_FILE=$1

echo "Webdir ${WEB_DIR}"


protoc \
        -I ${PROTO_DIR} \
        $PROTO_FILE  \
        --proto_path=${VENDOR}/github.com/envoyproxy/protoc-gen-validate/ \
        --proto_path=${VENDOR}/github.com/grpc-ecosystem/grpc-gateway/ \
        --proto_path=${PROTO_DIR}/ \
        --validate_out="lang=go:${PROJECT_ROOT_DIR}/.." \
        --go_out=${PROJECT_ROOT_DIR}/.. \
        --twirp_swagger_out=${SWAGGER_DIR}/spec \
        --twirp_out=${PROJECT_ROOT_DIR}/..

    #@protobuf-ts/runtime
    yarn --cwd ${WEB_DIR} protoc --ts_out ${WEB_DIR}/src/grpc --proto_path ${PROTO_DIR} \
        --proto_path=${VENDOR}/github.com/envoyproxy/protoc-gen-validate/ \
        --proto_path=${VENDOR}/github.com/grpc-ecosystem/grpc-gateway/ \
        --proto_path=${PROTO_DIR}/ \
        --ts_opt force_server_none \
        --ts_opt optimize_code_size \
        --ts_opt enable_angular_annotations \
        --ts_opt generate_dependencies \
        $PROTO_FILE
