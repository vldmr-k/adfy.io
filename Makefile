gen:
	bin/proto.sh

serve:
	go run cmd/server/main.go

migrate:
	go build cmd/db/main.go

swagger:
	chmod -R +x bin/
	bin/swagger-documentation.sh
	bin/swagger serve doc/swagger/swagger.yaml

di:
	cd internal/kernel && dingo
