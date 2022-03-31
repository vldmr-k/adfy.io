#/bin/bash

PROJECT_ROOT_DIR="$( cd "$( dirname "$0" )" && pwd )"/..
PROTO_DIR=${PROJECT_ROOT_DIR}/rpc

DOC_DIR=${PROJECT_ROOT_DIR}/doc
SWAGGER_DIR=${DOC_DIR}/swagger

test -d $SWAGGER_DIR || mkdir -p $SWAGGER_DIR

for service in user project
do 
    twirp-swagger-gen \
		-in $PROTO_DIR/$service/service.proto \
		-out $SWAGGER_DIR/$service.swagger.json \
		-host localhost
done

$PROJECT_ROOT_DIR/bin/swagger mixin $SWAGGER_DIR/*.json --format=yaml -o $SWAGGER_DIR/swagger.yaml
rm $SWAGGER_DIR/*.json