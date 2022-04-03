package mw

import (
	"context"
	"net/http"

	pkgctx "adfy.io/pkg/ctx"
)

// AuthContext adds context with autorization key to http request
func AuthContext(h http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		ctx := context.Background()
		ctx = context.WithValue(ctx, pkgctx.JWTKey, r.Header.Get("Authorization"))
		h.ServeHTTP(w, r.WithContext(ctx))
	}
	return http.HandlerFunc(fn)
}
