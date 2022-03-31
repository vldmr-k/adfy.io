package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"adfy.com/internal/kernel"
	"github.com/gorilla/mux"

	projectService "adfy.com/internal/projectservice"
	userService "adfy.com/internal/userservice"

	projectpb "adfy.com/rpc/project"
	userpb "adfy.com/rpc/user"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)

	userServiceHandler := userpb.NewUserServiceServer(&userService.UserService{})
	projectServiceHandler := projectpb.NewProjectServiceServer(&projectService.ProjectService{})

	r.PathPrefix(userServiceHandler.PathPrefix()).Handler(userServiceHandler)
	r.PathPrefix(projectServiceHandler.PathPrefix()).Handler(projectServiceHandler)

	addr := fmt.Sprintf("%s:%d", kernel.Cfg.Server.Host, kernel.Cfg.Server.Port)

	r.Walk(func(route *mux.Route, router *mux.Router, ancestors []*mux.Route) error {
		fmt.Println(route.GetName())
		return nil
	})

	srv := &http.Server{
		Handler: r,
		Addr:    addr,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())

}

func mainOld() {

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
