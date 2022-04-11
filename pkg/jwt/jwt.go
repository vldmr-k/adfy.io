package jwt

import (
	"fmt"
	"time"

	"adfy.io/pkg/config"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/google/uuid"
)

// New instantiates new JWT service
func NewJWT(cfg *config.Config) *JWT {
	secret := cfg.Jwt.Secret
	duration := cfg.Jwt.Duration
	algo := cfg.Jwt.Algo

	signingMethod := jwt.GetSigningMethod(algo)
	if signingMethod == nil {
		panic("invalid signing method")
	}

	return &JWT{
		key:      []byte(secret),
		duration: time.Duration(duration) * time.Minute,
		algo:     signingMethod,
	}
}

// JWT contains data necessery for jwt auth
type JWT struct {
	// Secret key used for signing.
	key []byte

	// Duration for which the jwt token is valid.
	duration time.Duration

	// JWT signing algorithm
	algo jwt.SigningMethod
}

// GenerateToken generates new jwt token
func (j *JWT) GenerateToken(u *AuthUser) (token string, err error) {
	t := jwt.NewWithClaims(j.algo, jwt.MapClaims{
		"id":  u.ID,
		"e":   u.Email,
		"n":   u.Name,
		"exp": time.Now().Add(j.duration).Unix(),
	})

	token, err = t.SignedString(j.key)
	return token, err
}

// ParseToken parses the bearer token
func (j *JWT) ParseToken(token string) (*AuthUser, error) {
	claims, err := j.verifyToken(token)
	if err != nil {
		return nil, err
	}

	id, ok := claims["id"]
	if !ok {
		return nil, fmt.Errorf("unauthorized: no id claim present")
	}

	uuid, err := uuid.Parse(id.(string))
	if err != nil {
		return nil, fmt.Errorf("unauthorized: can't parse id")
	}

	email, ok := claims["e"]
	if !ok {
		return nil, fmt.Errorf("unauthorized: no email claim present")
	}

	name, ok := claims["n"]
	if !ok {
		return nil, fmt.Errorf("unauthorized: no name claim present")
	}

	return &AuthUser{
		ID:    uuid,
		Email: email.(string),
		Name:  name.(string),
	}, nil

}

func (j *JWT) verifyToken(token string) (map[string]interface{}, error) {
	t, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if token.Method != j.algo {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return j.key, nil
	})

	if err != nil {
		fmt.Println(err)
		return nil, fmt.Errorf("could not parse provided token")
	}

	if claims, ok := t.Claims.(jwt.MapClaims); ok && t.Valid {
		return claims, nil
	}

	return nil, fmt.Errorf("jwt token could not be verified")
}
