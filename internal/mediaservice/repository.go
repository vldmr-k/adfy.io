package mediaservice

import (
	"context"

	pkgctx "adfy.io/pkg/ctx"
	"adfy.io/pkg/db"
	"gorm.io/gorm"
)

func NewMediaRepository(orm *db.Orm, authContext *pkgctx.AuthContext) *MediaRepository {
	return &MediaRepository{
		Orm:         orm,
		AuthContext: authContext,
	}
}

type MediaRepository struct {
	Orm         *db.Orm
	AuthContext *pkgctx.AuthContext
}

// Find Media By ID
func (r *MediaRepository) Find(ctx context.Context, id string) (*Media, error) {
	media := &Media{}
	result := r.Orm.Scopes(r.ownerScope(ctx)).Find(&media, "id = ?", id)
	return media, result.Error
}

//Find All Media By User
func (r *MediaRepository) All(ctx context.Context) ([]Media, error) {
	var lists []Media
	result := r.Orm.Scopes(r.ownerScope(ctx)).Find(&lists)
	return lists, result.Error
}

// Create Media
func (r *MediaRepository) Save(ctx context.Context, media *Media) error {
	result := r.Orm.Scopes(r.ownerScope(ctx)).Save(media)
	return result.Error
}

// Create Media
func (r *MediaRepository) Create(ctx context.Context, media *Media) error {
	result := r.Orm.Create(&media)
	return result.Error
}

//Delete Project
func (r *MediaRepository) Delete(ctx context.Context, media *Media) error {
	result := r.Orm.Scopes(r.ownerScope(ctx)).Delete(media, "id = ?", media.ID)
	return result.Error
}

func (r *MediaRepository) ownerScope(ctx context.Context) func(db *gorm.DB) *gorm.DB {
	usr := r.AuthContext.GetAuthUser(ctx)
	return func(db *gorm.DB) *gorm.DB {
		return db.Scopes().Where("owner_id = ?", usr.ID)
	}
}
