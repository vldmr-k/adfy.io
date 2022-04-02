#/bin/bash

. $(dirname "$0")/init.sh

$PROJECT_ROOT_DIR/bin/swagger mixin $SWAGGER_DIR/spec/*/*.json --format=yaml -o $SWAGGER_DIR/swagger.yaml
