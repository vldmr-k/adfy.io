gen:
	go generate ./...

migrate:
	go run cmd/db/main.go

srv:
  export CONFIG_PATH=/home/vldmrk/go/packages/adfy.io go run main.go

swagger:
	chmod -R +x bin/
	bin/swagger-documentation.sh
	bin/swagger serve doc/swagger/swagger.yaml

di:
	cd internal/kernel && dingo
