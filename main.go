package main

import (
	"log"
	"net/http"
	"time"

	"adfy.io/cmd/server"
)

func main() {
	handler, addr := server.NewServer()

	srv := &http.Server{
		Handler: handler,
		Addr:    addr,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Printf("https://%s", addr)
	log.Fatal(srv.ListenAndServe())
}
