gen:
	protoc \
	-I . \
	--proto_path=${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.7/ \
	--proto_path=${GOPATH}/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.16.0/ \
	--validate_out="lang=go:./.." \
	--go_out=./..  --twirp_out=./.. \
	rpc/user/service.proto

swagger:
	chmod -R +x bin/
	bin/swagger-documentation.sh
	bin/swagger serve doc/swagger/swagger.yaml

di:
	cd internal/kernel && dingo