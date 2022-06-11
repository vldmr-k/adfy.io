package db

import (
	"context"

	"adfy.io/pkg/ctx"
	"adfy.io/pkg/jwt"
	"gorm.io/gorm"
)

type BaseRepository struct {
	AuthContext ctx.AuthContext
}

func NewBaseRepository(AuthContext ctx.AuthContext) BaseRepository {
	return BaseRepository{AuthContext}
}

func (b *BaseRepository) AuthUser(ctx context.Context) *jwt.AuthUser {
	return b.AuthContext.GetAuthUser(ctx)
}

func OwnerScope(usr *jwt.AuthUser) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Scopes().Where("owner_id = ?", usr.ID)
	}
}
