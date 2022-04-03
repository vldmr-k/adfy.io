package ctx

import (
	"context"

	"adfy.io/pkg/jwt"
)

// KeyString should be used when setting and fetching context values
type KeyString string

// JWTKey is a context key for storing token
var JWTKey = "http_jwt_key"

// AuthUserKey is a context ket for storing AuthUser model
var AuthUserKey = "_authuser"

func NewAuthContext() *AuthContext {
	return &AuthContext{}
}

// Service represents context service
type AuthContext struct{}

// GetAuthUser fetches auth user from context
func (s *AuthContext) GetAuthUser(c context.Context) *jwt.AuthUser {
	return c.Value(KeyString(AuthUserKey)).(*jwt.AuthUser)
}
