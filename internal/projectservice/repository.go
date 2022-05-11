package projectservice

import (
	"context"

	pkgctx "adfy.io/pkg/ctx"
	"adfy.io/pkg/db"
	"adfy.io/pkg/jwt"
	"gorm.io/gorm"
)

func NewProjectRepository(orm *db.Orm, authContext *pkgctx.AuthContext) *ProjectRepository {
	return &ProjectRepository{
		Orm:         orm,
		AuthContext: authContext,
	}
}

type ProjectRepository struct {
	Orm         *db.Orm
	AuthContext *pkgctx.AuthContext
}

func (u *ProjectRepository) authUser(ctx context.Context) *jwt.AuthUser {
	return u.AuthContext.GetAuthUser(ctx)
}

// Find Project By ID
func (r *ProjectRepository) Find(ctx context.Context, id string) (Project, error) {
	usr := r.authUser(ctx)

	project := &Project{}
	result := r.Orm.Scopes(ownerScope(usr)).First(&project, id)
	return *project, result.Error
}

//Find Project By User
func (r *ProjectRepository) All(ctx context.Context) ([]Project, error) {
	usr := r.authUser(ctx)
	var projects []Project
	result := r.Orm.Scopes(ownerScope(usr)).Find(&projects)
	return projects, result.Error
}

// Create Project
func (r *ProjectRepository) Save(ctx context.Context, project *Project) error {
	usr := r.authUser(ctx)
	result := r.Orm.Scopes(ownerScope(usr)).Save(&project)
	return result.Error
}

// Create Project
func (r *ProjectRepository) Create(ctx context.Context, project *Project) error {
	result := r.Orm.Create(&project)
	return result.Error
}

//Delete Project
func (u *ProjectRepository) Delete(owner *jwt.AuthUser, project Project) error {
	result := u.Orm.Delete(project)
	return result.Error
}

func ownerScope(usr *jwt.AuthUser) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Scopes().Where("OwnerID = ?", usr.ID)
	}
}
