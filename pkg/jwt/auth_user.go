package jwt

type AuthUserModel interface {
	GetAuthUser() *AuthUser
}

type AuthUser struct {
	ID    string
	Name  string
	Email string
}
