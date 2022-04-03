package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"adfy.io/internal/kernel"

	"github.com/gorilla/mux"

	mw "adfy.io/pkg/mw"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)

	di := kernel.DefaultContainer

	cfg := di.GetConfig()

	r.Use(mw.AuthContext)
	r.Use(mw.CORS)

	userServiceHandler := di.GetUserServiceServer()
	projectServiceHandler := di.GetProjectServiceServer()

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

func registerRouters() {

}
