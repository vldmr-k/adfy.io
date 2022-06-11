package placementservice

import (
	projectservice "adfy.io/internal/projectservice"
	"adfy.io/pkg/db"
	"gorm.io/gorm"
)

func NewPlacementRepository(orm *db.Orm, baseRepository db.BaseRepository) *PlacementRepository {
	return &PlacementRepository{
		Orm:            orm,
		BaseRepository: baseRepository,
	}
}

type PlacementRepository struct {
	db.BaseRepository
	Orm *db.Orm
}

// Find Placement By ID
func (r *PlacementRepository) Find(project projectservice.Project, id string) (*Placement, error) {
	placement := &Placement{}
	result := r.Orm.Scopes(projectScope(project)).Find(&placement, "id = ?", id)
	return placement, result.Error
}

//Find Placement By Project
func (r *PlacementRepository) AllByProject(project projectservice.Project) ([]Placement, error) {
	var placements []Placement
	result := r.Orm.Scopes(projectScope(project)).Find(&placements)
	return placements, result.Error
}

// Save Placement
func (r *PlacementRepository) Save(project projectservice.Project, placement *Placement) error {
	result := r.Orm.Scopes(projectScope(project)).Save(placement)
	return result.Error
}

// Create Project
func (r *PlacementRepository) Create(project projectservice.Project, placement *Placement) error {
	result := r.Orm.Scopes(projectScope(project)).Create(&placement)
	return result.Error
}

// Delete Project
func (r *PlacementRepository) Delete(project projectservice.Project, placement *Placement) error {
	result := r.Orm.Scopes(projectScope(project)).Delete(placement, "id = ?", placement.ID)
	return result.Error
}

func projectScope(project projectservice.Project) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Scopes().Where("project_id = ?", project.ID)
	}
}
