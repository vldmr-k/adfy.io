package areaservice

import (
	"context"

	"adfy.io/internal/projectservice"
	"adfy.io/pkg/db"
	"gorm.io/gorm"
)

type AreaRepository struct {
	db.BaseRepository
	Orm *db.Orm
}

func NewAreaRepository(baseRepository db.BaseRepository) *AreaRepository {
	return &AreaRepository{
		BaseRepository: baseRepository,
	}
}

func (r *AreaRepository) Find(ctx context.Context, id string) (area *Area, err error) {
	usr := r.AuthContext.GetAuthUser(ctx)
	result := r.Orm.Scopes(db.OwnerScope(usr)).Find(area, "id = ?", id)
	return area, result.Error
}

//Find All Area By Project
func (r *AreaRepository) GetByProject(ctx context.Context, project *projectservice.Project) ([]Area, error) {
	usr := r.AuthContext.GetAuthUser(ctx)
	var lists []Area
	result := r.Orm.Scopes(db.OwnerScope(usr), projectScope(project)).Find(&lists)
	return lists, result.Error
}

// Create Area
func (r *AreaRepository) Save(ctx context.Context, area *Area) error {
	usr := r.AuthContext.GetAuthUser(ctx)

	result := r.Orm.Scopes(db.OwnerScope(usr)).Save(area)
	return result.Error
}

// Create Area
func (r *AreaRepository) Create(ctx context.Context, area *Area) error {
	result := r.Orm.Create(&area)
	return result.Error
}

//Delete Area
func (r *AreaRepository) Delete(ctx context.Context, area *Area) error {
	usr := r.AuthContext.GetAuthUser(ctx)

	result := r.Orm.Scopes(db.OwnerScope(usr)).Delete(area, "id = ?", area.ID)
	return result.Error
}

func projectScope(project *projectservice.Project) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Scopes().Where("project_id = ?", project.ID)
	}
}
