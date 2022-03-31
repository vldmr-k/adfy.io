package main

import (
	"fmt"
	"net/http"

	userserver "adfy.com/internal/userserver"
	userpb "adfy.com/rpc/user"
)

func main() {
	server := &userserver.Server{}

	twirpHandler := userpb.NewUserServiceServer(server)

	mux := http.NewServeMux()



	// The generated code includes a method, PathPrefix(), which
	// can be used to mount your service on a mux.
	mux.Handle(twirpHandler.PathPrefix(), twirpHandler)
	fmt.Print(http.ListenAndServe(":8080", mux))

}
