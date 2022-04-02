#/bin/bash

. $(dirname "$0")/init.sh


for proto_file in $(find ./rpc -type f -name "*.proto"); do 
      echo "Begin generate ${proto_file}... \n"
      protoc \
	-I ./rpc \
	$proto_file  \
	--proto_path=${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.7/ \
	--proto_path=${GOPATH}/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.16.0/ \
	--validate_out="lang=go:./.." \
	--go_out=./.. \
      --twirp_swagger_out=${SWAGGER_DIR}/spec \
      --twirp_out=./..

done

