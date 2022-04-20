#/bin/bash

. $(dirname "$0")/init.sh


for proto_file in $(find ./rpc -type f -name "*.proto"); do
    echo "Begin generate ${proto_file}... \n"
    protoc \
        -I ./rpc \
        $proto_file  \
        --proto_path=${VENDOR}/github.com/envoyproxy/protoc-gen-validate/ \
        --proto_path=${VENDOR}/github.com/grpc-ecosystem/grpc-gateway/ \
        --validate_out="lang=go:./.." \
        --go_out=./.. \
        --twirp_swagger_out=${SWAGGER_DIR}/spec \
        --twirp_out=./..

    #@protobuf-ts/runtime
    yarn --cwd web protoc --ts_out ../web/src/grpc --proto_path ../rpc \
        --proto_path=${VENDOR}/github.com/envoyproxy/protoc-gen-validate/ \
        --proto_path=${VENDOR}/github.com/grpc-ecosystem/grpc-gateway/ \
        --ts_opt force_server_none \
        --ts_opt optimize_code_size \
        --ts_opt enable_angular_annotations \
        --ts_opt generate_dependencies \
        .$proto_file

done

