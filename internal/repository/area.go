package repository

import (
	"context"

	"adfy.io/internal/entity"
	"adfy.io/pkg/db"
)

type AreaRepository struct {
	db.BaseRepository
}

func NewAreaRepository(baseRepository db.BaseRepository) *AreaRepository {
	return &AreaRepository{
		BaseRepository: baseRepository,
	}
}

func (r *AreaRepository) Find(ctx context.Context, id string) (area *entity.Area, err error) {
	usr := r.AuthContext.GetAuthUser(ctx)
	area = &entity.Area{}
	result := r.Orm.Scopes(db.OwnerScope(usr)).Find(area, "id = ?", id)
	return area, result.Error
}

//Find All Area By Project
func (r *AreaRepository) GetByProject(ctx context.Context, projectId string) ([]entity.Area, error) {
	//usr := r.AuthContext.GetAuthUser(ctx)
	var areas []entity.Area
	result := r.Orm.Find(&areas)
	return areas, result.Error
}

// Create Area
func (r *AreaRepository) Save(ctx context.Context, area *entity.Area) error {
	usr := r.AuthContext.GetAuthUser(ctx)

	result := r.Orm.Scopes(db.OwnerScope(usr)).Save(area)
	return result.Error
}

// Create Area
func (r *AreaRepository) Create(ctx context.Context, area *entity.Area) error {
	result := r.Orm.Create(&area)
	return result.Error
}

//Delete Area
func (r *AreaRepository) Delete(ctx context.Context, area *entity.Area) error {
	usr := r.AuthContext.GetAuthUser(ctx)

	result := r.Orm.Scopes(db.OwnerScope(usr)).Delete(area, "id = ?", area.ID)
	return result.Error
}
