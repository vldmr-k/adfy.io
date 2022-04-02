proto:
	bin/proto.sh

swagger:
	chmod -R +x bin/
	bin/swagger-documentation.sh
	bin/swagger serve doc/swagger/swagger.yaml

di:
	cd internal/kernel && dingo