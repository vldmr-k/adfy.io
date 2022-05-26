gen:
	go generate ./...

serve:
	export CONFIG_PATH=. && go run cmd/server/main.go

web:
	cd web && yarn run start

migrate:
	export CONFIG_PATH=. && go run cmd/db/main.go

swagger:
	chmod -R +x bin/
	bin/swagger-documentation.sh
	bin/swagger serve doc/swagger/swagger.yaml

di:
	cd internal/kernel && dingo
