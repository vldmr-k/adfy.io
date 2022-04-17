package projectservice

import (
	"adfy.io/pkg/db"
	"adfy.io/pkg/jwt"
)

func NewProjectRepository(orm *db.Orm) *ProjectRepository {
	return &ProjectRepository{
		Orm: orm,
	}
}

type ProjectRepository struct {
	Orm *db.Orm
}

// Find Project By ID
func (u *ProjectRepository) Find(usr *jwt.AuthUser, id string) (Project, error) {
	project := &Project{}
	result := u.Orm.Where("OwnerID =? ", usr.ID.String()).First(&project, id)
	return *project, result.Error
}

//Find Project By User
func (u *ProjectRepository) All(usr *jwt.AuthUser) ([]Project, error) {
	var projects []Project
	result := u.Orm.Where("OwnerID = ?", usr.ID).Find(&projects)
	return projects, result.Error
}

// Create Project
func (u *ProjectRepository) Save(project *Project) error {
	result := u.Orm.Save(&project)
	return result.Error
}

// Create Project
func (u *ProjectRepository) Create(owner *jwt.AuthUser, project *Project) error {
	project.OwnerID = owner.ID.String()
	result := u.Orm.Create(&project)
	return result.Error
}
