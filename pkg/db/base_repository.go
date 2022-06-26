package db

import (
	"context"

	"adfy.io/pkg/ctx"
	"adfy.io/pkg/jwt"
	"gorm.io/gorm"
)

type BaseRepository struct {
	AuthContext *ctx.AuthContext
	Orm         *Orm
}

func NewBaseRepository(AuthContext *ctx.AuthContext, Orm *Orm) BaseRepository {
	return BaseRepository{AuthContext, Orm}
}

func (b *BaseRepository) AuthUser(ctx context.Context) *jwt.AuthUser {
	return b.AuthContext.GetAuthUser(ctx)
}

func OwnerScope(usr *jwt.AuthUser) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Where("owner_id = ?", usr.ID)
	}
}

func ProjectScope(projectID string) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Where("project_id = ?", projectID)
	}
}
