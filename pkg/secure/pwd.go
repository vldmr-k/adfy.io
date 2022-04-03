package secure

import (
	"golang.org/x/crypto/bcrypt"
)

// New creates new password service
func NewSecure(minStr int) *Secure {
	return &Secure{minStr: minStr}
}

// Service contains password related methods
type Secure struct {
	minStr int
}

// Hash hashes the password using bcrypt
func (s *Secure) Hash(password string) string {
	hashedPW, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(hashedPW)
}

// MatchesHash checks whether hash matches with password. Returns true if hash and password match.
func (s *Secure) MatchesHash(hash, password string) bool {
	return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) == nil
}
