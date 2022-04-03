package hook

import (
	"context"
	"strings"

	"adfy.io/pkg/jwt"
	"github.com/twitchtv/twirp"

	pkgctx "adfy.io/pkg/ctx"
)

func NewVerifyJWTHook(jwt *jwt.JWT) *VerifyJWTHook {
	return &VerifyJWTHook{
		jwt: jwt,
	}
}

type VerifyJWTHook struct {
	jwt *jwt.JWT
}

// WithJWTAuth creates new twirp authentication hook
func (j *VerifyJWTHook) WithJWTAuth(skip ...string) *twirp.ServerHooks {
	return &twirp.ServerHooks{
		RequestRouted: func(ctx context.Context) (context.Context, error) {
			mtd, _ := twirp.MethodName(ctx)
			for _, smtd := range skip {
				if mtd == smtd {
					return ctx, nil
				}
			}

			bearer, ok := ctx.Value(pkgctx.JWTKey).(string)
			if !ok {
				return ctx, twirp.NewError(twirp.Unauthenticated, "no auth headers present")
			}

			slice := strings.Split(bearer, " ")

			if len(slice) != 2 || strings.ToLower(slice[0]) != "bearer" {
				return ctx, twirp.NewError(twirp.Unauthenticated, "no bearer token")
			}

			user, err := j.jwt.ParseToken(slice[1])
			if err != nil {
				return ctx, twirp.NewError(twirp.Unauthenticated, err.Error())
			}

			return context.WithValue(ctx, pkgctx.KeyString(pkgctx.AuthUserKey), user), nil
		},
	}
}
