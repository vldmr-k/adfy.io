package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"adfy.com/internal/kernel"

	projectService "adfy.com/internal/projectservice"
	userService "adfy.com/internal/userservice"

	projectpb "adfy.com/rpc/project"
	userpb "adfy.com/rpc/user"
)

func main() {

	userServiceHandler := userpb.NewUserServiceServer(&userService.UserService{})
	projectServiceHandler := projectpb.NewProjectServiceServer(&projectService.ProjectService{})

	mux := http.NewServeMux()

	mux.Handle(userServiceHandler.PathPrefix(), userServiceHandler)
	mux.Handle(projectServiceHandler.PathPrefix(), projectServiceHandler)

	fmt.Println(projectServiceHandler.PathPrefix())

	handler := Logging(mux)

	adr := fmt.Sprintf("%s:%d", kernel.Cfg.Server.Host, kernel.Cfg.Server.Port)

	fmt.Println("Listening: http://" + adr)

	http.ListenAndServe(adr, handler)
}

func Logging(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, req)
		log.Printf("%s %s %s", req.Method, req.RequestURI, time.Since(start))
	})
}
