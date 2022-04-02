package jwt

import "github.com/google/uuid"

type AuthUserModel interface {
	GetAuthUser() *AuthUser
}

type AuthUser struct {
	ID    uuid.UUID
	Name  string
	Email string
}
