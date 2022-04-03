package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"adfy.io/internal/kernel"

	"github.com/gorilla/mux"

	projectService "adfy.io/internal/projectservice"

	projectpb "adfy.io/rpc/project"
	userpb "adfy.io/rpc/user"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)

	di := kernel.DefaultContainer

	cfg := di.GetConfig()

	r.Use(auth)

	userServiceHandler := userpb.NewUserServiceServer(di.GetUserService())
	projectServiceHandler := projectpb.NewProjectServiceServer(&projectService.ProjectService{})

	r.PathPrefix(userServiceHandler.PathPrefix()).Handler(userServiceHandler)
	r.PathPrefix(projectServiceHandler.PathPrefix()).Handler(projectServiceHandler)

	addr := fmt.Sprintf("%s:%d", cfg.Server.Host, cfg.Server.Port)

	srv := &http.Server{
		Handler: r,
		Addr:    addr,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())

}

func auth(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := context.WithValue(r.Context(), "user", "theuser")

		// Call the next handler, which can be another middleware in the chain, or the final handler.
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func Logging(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, req)
		log.Printf("%s %s %s", req.Method, req.RequestURI, time.Since(start))
	})
}
