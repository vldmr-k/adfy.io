package repository

import (
	"context"

	"adfy.io/internal/entity"
	"adfy.io/pkg/db"
	"gorm.io/gorm"
)

func NewPlacementRepository(baseRepository db.BaseRepository) *PlacementRepository {
	return &PlacementRepository{
		BaseRepository: baseRepository,
	}
}

type PlacementRepository struct {
	db.BaseRepository
}

// Find By Id
func (r *PlacementRepository) Find(ctx context.Context, id string) (*entity.Placement, error) {
	usr := r.BaseRepository.AuthContext.GetAuthUser(ctx)
	placement := &entity.Placement{}
	result := r.Orm.Scopes(db.OwnerScope(usr)).Find(&placement, "id = ?", id)
	return placement, result.Error
}

//Find Placement By Project
func (r *PlacementRepository) FindAllByProject(ctx context.Context, project *entity.Project) ([]entity.Placement, error) {
	usr := r.BaseRepository.AuthContext.GetAuthUser(ctx)

	var placements []entity.Placement
	result := r.Orm.Scopes(projectScope(project), db.OwnerScope(usr)).Find(&placements)
	return placements, result.Error
}

// Save Placement
func (r *PlacementRepository) Save(ctx context.Context, placement *entity.Placement) error {
	usr := r.BaseRepository.AuthContext.GetAuthUser(ctx)
	result := r.Orm.Scopes(db.OwnerScope(usr)).Save(placement)
	return result.Error
}

// Create Project
func (r *PlacementRepository) Create(project *entity.Project, placement *entity.Placement) error {
	result := r.Orm.Scopes(projectScope(project)).Create(&placement)
	return result.Error
}

// Delete Project
func (r *PlacementRepository) Delete(ctx context.Context, placement *entity.Placement) error {
	usr := r.BaseRepository.AuthContext.GetAuthUser(ctx)

	result := r.Orm.Scopes(db.OwnerScope(usr)).Delete(placement, "id = ?", placement.ID)
	return result.Error
}

func projectScope(project *entity.Project) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Scopes().Where("project_id = ?", project.ID)
	}
}
