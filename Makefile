gen:
	protoc --go_out=./.. --twirp_out=./.. rpc/user/service.proto
	protoc --go_out=./.. --twirp_out=./.. rpc/project/service.proto


swagger:
	chmod -R +x bin/
	bin/swagger-documentation.sh
	bin/swagger serve doc/swagger/swagger.yaml