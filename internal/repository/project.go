package repository

import (
	"context"

	"adfy.io/internal/entity"
	"adfy.io/pkg/db"
	"adfy.io/pkg/jwt"
	"gorm.io/gorm"
)

func NewProjectRepository(baseRepository db.BaseRepository) *ProjectRepository {
	return &ProjectRepository{
		BaseRepository: baseRepository,
	}
}

type ProjectRepository struct {
	db.BaseRepository
}

// Find Project By ID
func (r *ProjectRepository) Find(ctx context.Context, id string) (*entity.Project, error) {
	usr := r.authUser(ctx)

	project := &entity.Project{}
	result := r.Orm.Scopes(ownerScope(usr)).Find(&project, "id = ?", id)
	return project, result.Error
}

//Find Project By User
func (r *ProjectRepository) All(ctx context.Context) ([]entity.Project, error) {
	usr := r.authUser(ctx)
	var projects []entity.Project
	result := r.Orm.Scopes(ownerScope(usr)).Find(&projects)
	return projects, result.Error
}

// Create Project
func (r *ProjectRepository) Save(ctx context.Context, project *entity.Project) error {
	usr := r.authUser(ctx)
	result := r.Orm.Scopes(ownerScope(usr)).Save(project)
	return result.Error
}

// Create Project
func (r *ProjectRepository) Create(ctx context.Context, project *entity.Project) error {
	result := r.Orm.Create(&project)
	return result.Error
}

//Delete Project
func (r *ProjectRepository) Delete(ctx context.Context, project *entity.Project) error {
	usr := r.authUser(ctx)
	result := r.Orm.Scopes(ownerScope(usr)).Delete(project, "id = ?", project.ID)
	return result.Error
}

func (u *ProjectRepository) authUser(ctx context.Context) *jwt.AuthUser {
	return u.AuthContext.GetAuthUser(ctx)
}

func ownerScope(usr *jwt.AuthUser) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Scopes().Where("owner_id = ?", usr.ID)
	}
}
